/// <reference path="../AttackStrategy.ts"/>

class EnemyAttack implements AttackStrategy {
    executeAttack(maxHp: number, hp: number, attack: number): number {
        return Math.round(hp / maxHp * attack);
    }
}