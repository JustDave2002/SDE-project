class Game {
    // KeyListener used to make player attack
    private keyListener: KeyListener;
    private pressed1: number;
    private pressed2: number;
    private facade: GameLogicFacade;

    constructor() {
        this.keyListener = new KeyListener();
        this.facade = new GameLogicFacade();

        // Start the animation
        this.gameLoop();
    }

    private gameLoop = () => {


        if (this.keyListener.isKeyDown(KeyListener.KEY_1)) {
            this.pressed1 += 1;
        } else {
            this.pressed1 = 0;
        }

        if (this.pressed1 == 1) {

        //    this.pause(3000);
            this.facade.attack('primaryAttack');
            this.facade.enemyAttack();
        }

        if (this.keyListener.isKeyDown(KeyListener.KEY_2)) {
            this.pressed2 += 1;
        } else {
            this.pressed2 = 0;
        }

        if (this.pressed2 == 1) {
            // this.pause(2000)
            this.facade.enemyAttack();
            this.facade.attack('secondaryAttack');

        }





        // request another frame
        requestAnimationFrame(this.gameLoop);
    }

    //  /**
    //  * pauses the game on button press and start back up 1000 ms after pressing start
    //  */
    //   private async pause(ms:number) {
    //         await this.delay(ms);
    //     }
    // /**
    //  * pauses the game for ms amount of time
    //  * @param ms amount of time in MS
    //  */
    //  public delay(ms: number) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
}

