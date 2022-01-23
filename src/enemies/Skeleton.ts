/// <reference path="../Enemy.ts"/>

class Skeleton extends Enemy {

    public constructor() {
        super();
        this.maxHp = 13;
        this.healthPoints = 13;
        this.damage = 15;
    }
}
