class EnemyFactory {
    private enemies: Enemy[];
    private enemy: Enemy;

    public constructor() {
        this.enemies = [new Zombie(), new Skeleton(), new Spider()]
    }

    public createEnemy() {
        this.enemy = this.enemies[Math.round(Math.random() * 2)];

        return this.enemy;
    }
}