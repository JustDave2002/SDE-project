/// <reference path="../AttackStrategy.ts"/>

class SecondaryAttack implements AttackStrategy {
    executeAttack(hp: number, attack: number): number {
        return Math.round(hp / 55 * attack);
    }
}