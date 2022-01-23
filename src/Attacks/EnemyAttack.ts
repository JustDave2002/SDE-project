/// <reference path="../AttackStrategy.ts"/>

class EnemyAttack implements AttackStrategy {
    executeAttack(hp: number, attack: number): number {
        return Math.round(hp / 15 * attack);
    }
}