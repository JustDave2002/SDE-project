/// <reference path="Context.ts"/>
/// <reference path="Attacks/PrimaryAttack.ts"/>
/// <reference path="Attacks/SecondaryAttack.ts"/>

class GameLogicFacade {
    public enemy: Enemy;
    public enemyFactory: EnemyFactory;
    public playerFactory: PlayerFactory;
    public player: Player;
    private damage: number;
    private start: boolean;
    private playerDied: boolean;
    private enemyDied: boolean;

    private context: Context;
    
    public constructor() {
        this.context = new Context;

        this.enemyFactory = new EnemyFactory();
        this.playerFactory = new PlayerFactory();
        this.playerDied = false;
        this.enemyDied = false;
        this.start = true;
    }

    public spawnPlayer(){
        this.player = this.playerFactory.createPlayer();
        console.log(this.player);
        if(this.start === true){
            console.log("Welcome soldier. You get a new " +  this.player.constructor.name);
            console.log(' ');
            this.start = false;
        } else {
            console.log("Your character died. You get a new " +  this.player.constructor.name);
            this.player.setHp(this.player.getMaxHp());
            console.log(' ');
        }  
    }

    public spawnEnemy(){
        this.enemy = this.enemyFactory.createEnemy();
        this.enemy.setHp(this.enemy.getMaxHp());
        console.log("A new"+ `%c ${this.enemy.constructor.name}`, 'color:red;', "spawned" );
        console.log(' ');
    }

    public attack(attack: string){
        console.clear();
        if (attack == 'primaryAttack'){
            this.context.setAttack(new PrimaryAttack());
        }
        if (attack == 'secondaryAttack'){
            this.context.setAttack(new SecondaryAttack());
        } 

        const maxHp = this.player.getMaxHp()
        const currentHp = this.player.getHp()
        const damage = this.player.getDamage()

        this.damage = this.context.executeAttack(maxHp, currentHp, damage);

        const enemyHp = this.enemy.getHp();

        if(this.damage < 0){
            this.damage = 0;
        }

        this.enemy.setHp(enemyHp - this.damage)

        let newEnemyHp = enemyHp - this.damage;

        this.enemyDied = false;
        
        if(newEnemyHp <= 0){
            newEnemyHp = 0;
            this.enemyDied = true;
        }

        console.log(`%c ${this.player.constructor.name}` + '%c attacked'+ `%c ${this.enemy.constructor.name}`+ '%c for' + `%c ${this.damage}` + ' %cdamage (' + enemyHp + '?????? - ' + this.damage + '?????? = ' + newEnemyHp + '??????)', 'color:green;', 'color:white;', 'color:red;','color:white','color:green', 'color:white')
        console.log(' ');

        return this.enemyDied
    }

    public enemyAttack(){
        const maxHp = this.enemy.getMaxHp()
        const hp = this.enemy.getHp()
        const damage = this.enemy.getDamage()
        
        this.context.setAttack(new EnemyAttack());

        this.damage = this.context.executeAttack(maxHp, hp, damage);

        const playerHp = this.player.getHp();

        if(this.damage < 0){
            this.damage = 0;
        }

        this.player.setHp(playerHp - this.damage)

        let newPlayerHp = playerHp - this.damage;

        this.playerDied = false;
        
        if(newPlayerHp <= 0){
            newPlayerHp = 0;
            this.playerDied = true;
        }

        console.log(`%c ${this.enemy.constructor.name}`+ '%c attacked'+ `%c ${this.player.constructor.name}`+ '%c for' + `%c ${this.damage}` + '%c damage (' + playerHp + '?????? - ' + this.damage + '?????? = ' + newPlayerHp + '??????)', 'color:red;', 'color:white;', 'color:green;','color:white','color:red', 'color:white')
        console.log(' ');

        return this.playerDied
    }
}