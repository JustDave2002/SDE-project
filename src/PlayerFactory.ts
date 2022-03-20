class PlayerFactory {
    private possiblePlayers: Player[];
    public player: Player;

    public constructor() {
        this.possiblePlayers = [new Swordsman(), new Bowman()]
    }

    public createPlayer() {
        this.player = this.possiblePlayers[Math.round(Math.random() * 1)];
             
        return this.player;
    }
}