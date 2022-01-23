/// <reference path="Context.ts"/>
/// <reference path="Attacks/PrimaryAttack.ts"/>
/// <reference path="Attacks/SecondaryAttack.ts"/>

class Game {
    private enemies: [];

    private damage: number;

    private context: Context;
    
    public constructor() {
        this.context = new Context;

        this.startGame();

        this.attack('secondaryAttack');
    }

    public startGame(){
        
    }

    public attack(attack: string){
        if (attack == 'primaryAttack'){
            this.context.setAttack(new PrimaryAttack());
        }
        if (attack == 'secondaryAttack'){
            this.context.setAttack(new SecondaryAttack());
        }

        this.damage = this.context.executeAttack(10, 14);

        console.log('player attacked monster for ' + this.damage)
    }
}