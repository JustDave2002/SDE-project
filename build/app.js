class Context {
    constructor() {
    }
    setAttack(attackStrategy) {
        this.attackStrategy = attackStrategy;
    }
    executeAttack(hp, attack) {
        return this.attackStrategy.executeAttack(hp, attack);
    }
}
class Enemy {
    constructor() {
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
                console.log('attacc');
                this.facade.attack('primaryAttack');
                this.facade.enemyAttack();
            }
            if (this.keyListener.isKeyDown(KeyListener.KEY_2)) {
                this.pressed2 += 1;
            }
            else {
                this.pressed2 = 0;
            }
            if (this.pressed2 == 1) {
                console.log("attac 2");
                this.facade.enemyAttack();
                this.facade.attack('secondaryAttack');
            }
            requestAnimationFrame(this.gameLoop);
        };
        this.keyListener = new KeyListener();
        this.facade = new GameLogicFacade();
        console.log('start animation');
        this.gameLoop();
    }
}
class PrimaryAttack {
    executeAttack(hp, attack) {
        return Math.round(hp / 45 * attack);
    }
}
class SecondaryAttack {
    executeAttack(hp, attack) {
        return Math.round(hp / 55 * attack);
    }
}
class GameLogicFacade {
    constructor() {
        this.context = new Context;
        this.startGame();
        this.possiblePlayers = [new Swordsman(), new Bowman()];
        this.enemies = [new Zombie(), new Skeleton(), new Spider()];
        this.spawnPlayer();
        this.spawnEnemy();
    }
    startGame() {
    }
    spawnPlayer() {
        this.player = this.possiblePlayers[Math.round(Math.random())];
        console.log("Your character died. You get a new " + this.player.constructor.name);
    }
    spawnEnemy() {
        this.enemy = this.enemies[Math.floor(Math.random() * 3)];
        console.log("A new " + this.enemy.constructor.name + " spawned");
    }
    attack(attack) {
        if (attack == 'primaryAttack') {
            this.context.setAttack(new PrimaryAttack());
        }
        if (attack == 'secondaryAttack') {
            this.context.setAttack(new SecondaryAttack());
        }
        else {
            console.log("error");
        }
        const hp = this.player.getHp();
        const damage = this.player.getDamage();
        this.damage = this.context.executeAttack(hp, damage);
        console.log('Player attacked monster for ' + this.damage + 'damage');
        this.player.setHp(hp - this.damage);
    }
    enemyAttack() {
        const hp = this.enemy.getHp();
        const damage = this.enemy.getDamage();
        this.context.setAttack(new EnemyAttack());
        this.damage = this.context.executeAttack(hp, damage);
        console.log('Monster attacked player for ' + this.damage + 'damage');
        this.enemy.setHp(hp - this.damage);
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
console.log("Javascript is working!");
window.addEventListener('load', () => {
    console.log("Handling the Load event");
    const game = new Game();
});
class Player {
    constructor() {
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
    executeAttack(hp, attack) {
        return Math.round(hp / 15 * attack);
    }
}
class Skeleton extends Enemy {
    constructor() {
        super();
        this.healthPoints = 13;
        this.damage = 15;
    }
}
class Spider extends Enemy {
    constructor() {
        super();
        this.healthPoints = 6;
        this.damage = 8;
    }
}
class Zombie extends Enemy {
    constructor() {
        super();
        this.healthPoints = 10;
        this.damage = 5;
    }
}
class Bowman extends Player {
    constructor() {
        super();
        this.healthPoints = 30;
        this.damage = 15;
    }
}
class Swordsman extends Player {
    constructor() {
        super();
        this.healthPoints = 45;
        this.damage = 10;
    }
}
//# sourceMappingURL=app.js.map