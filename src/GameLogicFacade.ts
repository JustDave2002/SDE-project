/// <reference path="Context.ts"/>
/// <reference path="Attacks/PrimaryAttack.ts"/>
/// <reference path="Attacks/SecondaryAttack.ts"/>

class GameLogicFacade {
    private enemies: Enemy[];
    private enemy: Enemy;
    private possiblePlayers: Player[];
    private player: Player;
    private damage: number;

    private context: Context;
    
    public constructor() {
        this.context = new Context;

        this.startGame();

        // this.attack('secondaryAttack');

        this.possiblePlayers = [new Swordsman(), new Bowman()]
        this.enemies = [new Zombie(), new Skeleton(), new Spider()]
        this.spawnPlayer();
        this.spawnEnemy();
    }

    public startGame(){
        
    }
    public spawnPlayer(){
        this.player = this.possiblePlayers[Math.round(Math.random())]
        console.log("Your character died. You get a new " +  this.player.constructor.name);
    }

    public spawnEnemy(){
        this.enemy = this.enemies[Math.floor(Math.random() * 3)]
        console.log("A new " + this.enemy.constructor.name + " spawned");
    }

    public attack(attack: string){
        if (attack == 'primaryAttack'){
            this.context.setAttack(new PrimaryAttack());
        }
        if (attack == 'secondaryAttack'){
            this.context.setAttack(new SecondaryAttack());
        } 

        const hp = this.player.getHp()
        const damage = this.player.getDamage()

        this.damage = this.context.executeAttack(hp, damage);

        console.log('Player attacked monster for ' + this.damage + 'damage')
        this.player.setHp(hp - this.damage)
    }

    public enemyAttack(){
        const hp = this.enemy.getHp()
        const damage = this.enemy.getDamage()
        
        this.context.setAttack(new EnemyAttack());

        this.damage = this.context.executeAttack(hp, damage);

        console.log('Monster attacked player for ' + this.damage + 'damage')
        this.enemy.setHp(hp - this.damage)
    }
}