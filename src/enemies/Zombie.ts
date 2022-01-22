/// <reference path="../Enemy.ts"/>

class Zombie extends Enemy {

    public constructor() {
        super();
        this.healthPoints = 10;
        this.damage = 5
    }
}
