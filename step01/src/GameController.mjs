import GameModelFactory from "./GameModelFactory.mjs";
import GameView from "./GameView.mjs";
import Game from "./Game.mjs";
import GameDispatcher from "./GameDispatcher.mjs";

class GameController {
  constructor() {
    this.game;
    this.gameView = new GameView(new GameDispatcher(this).dispatch);
  }

  inputCarNames = (inputString) => {
    const gameModels = new GameModelFactory().createGameModels(inputString);
    if (gameModels.length === 0) {
      this.gameView.renderErrorAlert();
      this.gameView.renderCarNames("");
      return;
    }

    this.game = new Game(gameModels);
    this.gameView.renderCars(gameModels);
  };

  playGameAt = (count) => {
    function isVaildateNumber(count) {
      const reg = /\d/g;
      return count.match(reg).length === count.length;
    }
    if (!isVaildateNumber(count)) return;
    const gameModels = this.game.play(count);
    this.gameView.renderArrow(gameModels);
    const winners = this.gameResult(gameModels);
    this.gameView.renderWinner(winners);
  };

  gameResult = (gameModels) => {
    let maxCount = -1;
    gameModels.forEach((gameModel) => {
      if (maxCount < gameModel.getCount()) {
        maxCount = gameModel.getCount();
      }
    });
    return gameModels.filter((gameModel) => gameModel.getCount() === maxCount);
  };

  restart = () => {
    location.reload();
  };
}

export default GameController;
