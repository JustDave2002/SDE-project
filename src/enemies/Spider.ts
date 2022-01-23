/// <reference path="../Enemy.ts"/>

class Spider extends Enemy {

    public constructor() {
        super();
        this.maxHp = 6;
        this.healthPoints = 6;
        this.damage = 8;
    }
}
