/// <reference path="../AttackStrategy.ts"/>

class SecondaryAttack implements AttackStrategy {
    executeAttack(hp: number, attack: number): number {
        return hp - attack;
    }
}