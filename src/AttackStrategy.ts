interface AttackStrategy {
    executeAttack(maxHp: number, hp: number, attack: number): number;
}