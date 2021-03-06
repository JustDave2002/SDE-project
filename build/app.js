class Context {
    constructor() {
    }
    setAttack(attackStrategy) {
        this.attackStrategy = attackStrategy;
    }
    executeAttack(maxHp, hp, attack) {
        return this.attackStrategy.executeAttack(maxHp, hp, attack);
    }
}
class Enemy {
    constructor() {
    }
    getMaxHp() {
        return this.maxHp;
    }
    setHp(Hp) {
        this.healthPoints = Hp;
    }
    getHp() {
        return this.healthPoints;
    }
    getDamage() {
        return this.damage;
    }
}
class EnemyFactory {
    constructor() {
        this.enemies = [new Zombie(), new Skeleton(), new Spider()];
    }
    createEnemy() {
        this.enemy = this.enemies[Math.round(Math.random() * 2)];
        return this.enemy;
    }
}
class Game {
    constructor() {
        this.gameLoop = () => {
            if (this.keyListener.isKeyDown(KeyListener.KEY_1)) {
                this.pressed1 += 1;
            }
            else {
                this.pressed1 = 0;
            }
            if (this.pressed1 == 1) {
                let enemyDied = this.facade.attack('primaryAttack');
                if (enemyDied == true) {
                    console.log(`%c ${this.facade.enemy.constructor.name}`, 'color:red;', 'died');
                    console.log(' ');
                    enemyDied = false;
                    this.facade.spawnEnemy();
                }
                let playerDied = this.facade.enemyAttack();
                if (playerDied == true) {
                    console.log(this.facade.player.constructor.name + ' died');
                    console.log(' ');
                    playerDied = false;
                    this.facade.spawnPlayer();
                }
            }
            if (this.keyListener.isKeyDown(KeyListener.KEY_2)) {
                this.pressed2 += 1;
            }
            else {
                this.pressed2 = 0;
            }
            if (this.pressed2 == 1) {
                let playerDied = this.facade.enemyAttack();
                if (playerDied == true) {
                    console.log(this.facade.player.constructor.name + ' died');
                    console.log(' ');
                    playerDied = false;
                    this.facade.spawnPlayer();
                }
                let enemyDied = this.facade.attack('secondaryAttack');
                if (enemyDied == true) {
                    console.log(`%c ${this.facade.enemy.constructor.name}`, 'color:red;', 'died');
                    console.log(' ');
                    enemyDied = false;
                    this.facade.spawnEnemy();
                }
            }
            requestAnimationFrame(this.gameLoop);
        };
        this.keyListener = new KeyListener();
        this.facade = new GameLogicFacade();
        this.facade.spawnPlayer();
        this.facade.spawnEnemy();
        this.gameLoop();
    }
}
class PrimaryAttack {
    executeAttack(maxHp, hp, attack) {
        return Math.round(hp / maxHp * attack);
    }
}
class SecondaryAttack {
    executeAttack(maxHp, hp, attack) {
        maxHp += 10;
        return Math.round(hp / maxHp * attack);
    }
}
class GameLogicFacade {
    constructor() {
        this.context = new Context;
        this.enemyFactory = new EnemyFactory();
        this.playerFactory = new PlayerFactory();
        this.playerDied = false;
        this.enemyDied = false;
        this.start = true;
    }
    spawnPlayer() {
        this.player = this.playerFactory.createPlayer();
        console.log(this.player);
        if (this.start === true) {
            console.log("Welcome soldier. You get a new " + this.player.constructor.name);
            console.log(' ');
            this.start = false;
        }
        else {
            console.log("Your character died. You get a new " + this.player.constructor.name);
            this.player.setHp(this.player.getMaxHp());
            console.log(' ');
        }
    }
    spawnEnemy() {
        this.enemy = this.enemyFactory.createEnemy();
        this.enemy.setHp(this.enemy.getMaxHp());
        console.log("A new" + `%c ${this.enemy.constructor.name}`, 'color:red;', "spawned");
        console.log(' ');
    }
    attack(attack) {
        console.clear();
        if (attack == 'primaryAttack') {
            this.context.setAttack(new PrimaryAttack());
        }
        if (attack == 'secondaryAttack') {
            this.context.setAttack(new SecondaryAttack());
        }
        const maxHp = this.player.getMaxHp();
        const currentHp = this.player.getHp();
        const damage = this.player.getDamage();
        this.damage = this.context.executeAttack(maxHp, currentHp, damage);
        const enemyHp = this.enemy.getHp();
        if (this.damage < 0) {
            this.damage = 0;
        }
        this.enemy.setHp(enemyHp - this.damage);
        let newEnemyHp = enemyHp - this.damage;
        this.enemyDied = false;
        if (newEnemyHp <= 0) {
            newEnemyHp = 0;
            this.enemyDied = true;
        }
        console.log(`%c ${this.player.constructor.name}` + '%c attacked' + `%c ${this.enemy.constructor.name}` + '%c for' + `%c ${this.damage}` + ' %cdamage (' + enemyHp + '?????? - ' + this.damage + '?????? = ' + newEnemyHp + '??????)', 'color:green;', 'color:white;', 'color:red;', 'color:white', 'color:green', 'color:white');
        console.log(' ');
        return this.enemyDied;
    }
    enemyAttack() {
        const maxHp = this.enemy.getMaxHp();
        const hp = this.enemy.getHp();
        const damage = this.enemy.getDamage();
        this.context.setAttack(new EnemyAttack());
        this.damage = this.context.executeAttack(maxHp, hp, damage);
        const playerHp = this.player.getHp();
        if (this.damage < 0) {
            this.damage = 0;
        }
        this.player.setHp(playerHp - this.damage);
        let newPlayerHp = playerHp - this.damage;
        this.playerDied = false;
        if (newPlayerHp <= 0) {
            newPlayerHp = 0;
            this.playerDied = true;
        }
        console.log(`%c ${this.enemy.constructor.name}` + '%c attacked' + `%c ${this.player.constructor.name}` + '%c for' + `%c ${this.damage}` + '%c damage (' + playerHp + '?????? - ' + this.damage + '?????? = ' + newPlayerHp + '??????)', 'color:red;', 'color:white;', 'color:green;', 'color:white', 'color:red', 'color:white');
        console.log(' ');
        return this.playerDied;
    }
}
class KeyListener {
    constructor() {
        this.keyCodeStates = new Array();
        this.keyCodeTyped = new Array();
        this.previousState = new Array();
        window.addEventListener("keydown", (ev) => {
            this.keyCodeStates[ev.keyCode] = true;
        });
        window.addEventListener("keyup", (ev) => {
            this.keyCodeStates[ev.keyCode] = false;
        });
    }
    onFrameStart() {
        this.keyCodeTyped = new Array();
        this.keyCodeStates.forEach((val, key) => {
            if (this.previousState[key] != val && !this.keyCodeStates[key]) {
                this.keyCodeTyped[key] = true;
                this.previousState[key] = val;
            }
        });
    }
    isKeyDown(keyCode) {
        return this.keyCodeStates[keyCode] == true;
    }
    isKeyTyped(keyCode) {
        return this.keyCodeTyped[keyCode] == true;
    }
}
KeyListener.KEY_ENTER = 13;
KeyListener.KEY_SHIFT = 16;
KeyListener.KEY_CTRL = 17;
KeyListener.KEY_ALT = 18;
KeyListener.KEY_ESC = 27;
KeyListener.KEY_SPACE = 32;
KeyListener.KEY_LEFT = 37;
KeyListener.KEY_UP = 38;
KeyListener.KEY_RIGHT = 39;
KeyListener.KEY_DOWN = 40;
KeyListener.KEY_DEL = 46;
KeyListener.KEY_1 = 49;
KeyListener.KEY_2 = 50;
KeyListener.KEY_3 = 51;
KeyListener.KEY_4 = 52;
KeyListener.KEY_5 = 53;
KeyListener.KEY_6 = 54;
KeyListener.KEY_7 = 55;
KeyListener.KEY_8 = 56;
KeyListener.KEY_9 = 57;
KeyListener.KEY_0 = 58;
KeyListener.KEY_A = 65;
KeyListener.KEY_B = 66;
KeyListener.KEY_C = 67;
KeyListener.KEY_D = 68;
KeyListener.KEY_E = 69;
KeyListener.KEY_F = 70;
KeyListener.KEY_G = 71;
KeyListener.KEY_H = 72;
KeyListener.KEY_I = 73;
KeyListener.KEY_J = 74;
KeyListener.KEY_K = 75;
KeyListener.KEY_L = 76;
KeyListener.KEY_M = 77;
KeyListener.KEY_N = 78;
KeyListener.KEY_O = 79;
KeyListener.KEY_P = 80;
KeyListener.KEY_Q = 81;
KeyListener.KEY_R = 82;
KeyListener.KEY_S = 83;
KeyListener.KEY_T = 84;
KeyListener.KEY_U = 85;
KeyListener.KEY_V = 86;
KeyListener.KEY_W = 87;
KeyListener.KEY_X = 88;
KeyListener.KEY_Y = 89;
KeyListener.KEY_Z = 90;
class PlayerFactory {
    constructor() {
        this.possiblePlayers = [new Swordsman(), new Bowman()];
    }
    createPlayer() {
        this.player = this.possiblePlayers[Math.round(Math.random() * 1)];
        return this.player;
    }
}
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game();
});
class Player {
    constructor() {
    }
    getMaxHp() {
        return this.maxHp;
    }
    setHp(Hp) {
        this.healthPoints = Hp;
    }
    getHp() {
        return this.healthPoints;
    }
    getDamage() {
        return this.damage;
    }
}
class EnemyAttack {
    executeAttack(maxHp, hp, attack) {
        return Math.round(hp / maxHp * attack);
    }
}
class Skeleton extends Enemy {
    constructor() {
        super();
        this.maxHp = 13;
        this.healthPoints = 13;
        this.damage = 15;
    }
}
class Spider extends Enemy {
    constructor() {
        super();
        this.maxHp = 6;
        this.healthPoints = 6;
        this.damage = 8;
    }
}
class Zombie extends Enemy {
    constructor() {
        super();
        this.maxHp = 10;
        this.healthPoints = 10;
        this.damage = 5;
    }
}
class Bowman extends Player {
    constructor() {
        super();
        this.maxHp = 30;
        this.healthPoints = 30;
        this.damage = 15;
    }
}
class Swordsman extends Player {
    constructor() {
        super();
        this.maxHp = 45;
        this.healthPoints = 45;
        this.damage = 10;
    }
}
//# sourceMappingURL=app.js.map