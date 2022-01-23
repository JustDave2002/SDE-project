abstract class Enemy {

   protected maxHp: number;
   protected healthPoints: number;
   protected damage: number;
    constructor() {
        
    }

    public getMaxHp() : number {
        return this.maxHp
    }

    public setHp(Hp : number) {
        this.healthPoints = Hp;
    }

    
    public getHp() : number {
        return this.healthPoints
    }
    
    
    public getDamage() : number {
        return this.damage
    }  
}