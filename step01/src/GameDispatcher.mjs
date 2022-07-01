class GameDispatcher {
  constructor(gameController) {
    this.gameController = gameController;
  }

  dispatch = (id, data) => {
    switch (id) {
      case "CarButton":
        this.gameController.inputCarNames(data);
        break;
      case "PlayButton":
        this.gameController.playGameAt(data);
        break;
      case "RestartButton":
        this.gameController.restart();
        break;
      default:
        break;
    }
  };
}

export default GameDispatcher;
