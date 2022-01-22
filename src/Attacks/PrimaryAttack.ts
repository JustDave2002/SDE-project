/// <reference path="../AttackStrategy.ts"/>

class PrimaryAttack implements AttackStrategy {
    executeAttack(hp: number, attack: number): number {
        return hp * attack;
    }
}