/// <reference path="Context.ts"/>
/// <reference path="Attacks/PrimaryAttack.ts"/>
/// <reference path="Attacks/SecondaryAttack.ts"/>

class Game {
    private enemies: [];

    private attack: string;

    private context: Context;
    
    public constructor() {
        this.startGame();

        this.attack = 'primaryAttack'

        this.attackEnemy();
    }

    public startGame(){
        
    }

    public attackEnemy(){
        if (this.attack == 'primaryAttack'){
            this.context.setAttack(new PrimaryAttack())
        }
        if (this.attack == 'secondaryAttack'){
            this.context.setAttack(new SecondaryAttack())
        }

        console.log(this.context.executeAttack(45, 14));
    }
}