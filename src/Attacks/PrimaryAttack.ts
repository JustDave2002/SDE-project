/// <reference path="../AttackStrategy.ts"/>

class PrimaryAttack implements AttackStrategy {
    executeAttack(maxHp: number, hp: number, attack: number): number {
        return Math.round(hp / maxHp * attack);
    }
}