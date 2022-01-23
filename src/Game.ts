class Game {
    // KeyListener used to make player attack
    private keyListener: KeyListener;
    private pressed1: number;
    private pressed2: number;
    private facade: GameLogicFacade;

    constructor() {
        this.keyListener = new KeyListener();
        this.facade = new GameLogicFacade();

        this.facade.spawnPlayer();
        this.facade.spawnEnemy();

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
        let enemyDied = this.facade.attack('primaryAttack');

        if(enemyDied == true){
            console.log(`%c ${this.facade.enemy.constructor.name}`, 'color:red;', 'died')
            console.log(' ');
            enemyDied = false;
            this.facade.spawnEnemy();
        }

            let playerDied = this.facade.enemyAttack();

            if(playerDied == true){
                console.log(this.facade.player.constructor.name + ' died')
                console.log(' ');
                playerDied = false;
                this.facade.spawnPlayer();
            }
        }

        if (this.keyListener.isKeyDown(KeyListener.KEY_2)) {
            this.pressed2 += 1;
        } else {
            this.pressed2 = 0;
        }

        if (this.pressed2 == 1) {
            // this.pause(2000)
            let playerDied = this.facade.enemyAttack();

            if(playerDied == true){
                console.log(this.facade.player.constructor.name + ' died')
                console.log(' ');
                playerDied = false;
                this.facade.spawnPlayer();
            }

            let enemyDied = this.facade.attack('secondaryAttack');

            if(enemyDied == true){
                console.log(`%c ${this.facade.enemy.constructor.name}`, 'color:red;', 'died')
                console.log(' ');
                enemyDied = false;
                this.facade.spawnEnemy();
            }
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

