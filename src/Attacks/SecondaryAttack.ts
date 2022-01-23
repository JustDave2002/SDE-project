/// <reference path="../AttackStrategy.ts"/>

class SecondaryAttack implements AttackStrategy {
    executeAttack(maxHp: number, hp: number, attack: number): number {
        maxHp += 10
        return Math.round(hp / maxHp * attack);
    }
}