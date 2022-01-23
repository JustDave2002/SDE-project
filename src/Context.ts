/// <reference path="AttackStrategy.ts"/>

class Context {
    private attackStrategy: AttackStrategy;

    public constructor(){

    }
    
    public setAttack(attackStrategy: AttackStrategy){
        this.attackStrategy = attackStrategy;
    }

    public executeAttack(hp: number, attack: number){
        return this.attackStrategy.executeAttack(hp, attack);
    }
}