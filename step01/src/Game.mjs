class Game {
  constructor(gameModels) {
    this.gameModels = gameModels;
  }
  play = (turn) => {
    for (let i = 0; i < turn; i++) {
      this.gameModels.forEach((gameModel) => {
        this.playTurnWith(gameModel);
      });
    }

    return this.gameModels;
  };

  playTurnWith = (gameModel) => {
    if (this.isExcel()) {
      gameModel.countIncrement();
    }
  };

  isExcel() {
    return 4 <= Math.floor(Math.random(10) * 10);
  }
}

export default Game;
