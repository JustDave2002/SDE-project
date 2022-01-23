abstract class Player {

    protected healthPoints: number;
    protected damage: number;
     constructor() {
         
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