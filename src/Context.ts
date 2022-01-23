/// <reference path="AttackStrategy.ts"/>

class Context {
    private attackStrategy: AttackStrategy;

    public constructor(){

    }
    
    public setAttack(attackStrategy: AttackStrategy){
        this.attackStrategy = attackStrategy;
    }

    public executeAttack(maxHp: number, hp: number, attack: number){
        return this.attackStrategy.executeAttack(maxHp, hp, attack);
    }
}