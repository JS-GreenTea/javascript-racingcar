class GameView {
  constructor(gameDispatcher) {
    this.carNamesElement = document.getElementById("car-names");
    this.carButtonElement = document.getElementById("car-button");
    this.playCountElement = document.getElementById("play-count");
    this.playButtonElement = document.getElementById("play-button");
    this.gameElement = document.getElementById("game");
    this.winnerElement = document.getElementById("winner");
    this.restartButtonElement = document.getElementById("restart-button");
    this.gameDispatcher = gameDispatcher;
    this.carButtonElement.addEventListener("click", this.onClickCarButton);
    this.playButtonElement.addEventListener("click", this.onClickPlayButton);
    this.restartButtonElement.addEventListener(
      "click",
      this.onClickRestartButton
    );
  }

  onClickCarButton = () => {
    this.gameDispatcher("CarButton", this.carNamesElement.value);
  };

  onClickPlayButton = () => {
    this.gameDispatcher("PlayButton", this.playCountElement.value);
  };

  onClickRestartButton = () => {
    this.gameDispatcher("RestartButton", "");
  };

  renderErrorAlert = () => {
    alert("잘못된 입력 값입니다.");
  };
  renderCarNames = (value) => {
    this.carNamesElement.value = value;
  };

  renderCars = (gameModels) => {
    this.gameElement.innerText = "";
    gameModels.forEach((gameModel) => {
      const carElement = document.createElement("div");
      carElement.setAttribute("class", "car");
      carElement.innerText = gameModel.getName();
      const trackElement = document.createElement("div");
      trackElement.setAttribute("class", "track");
      trackElement.appendChild(carElement);
      this.gameElement.appendChild(trackElement);
    });
  };

  renderArrow = (gameModels) => {
    gameModels.forEach((gameModel, index) => {
      for (let i = 0; i < gameModel.getCount(); i++) {
        const arrowElement = document.createElement("div");
        arrowElement.setAttribute("class", "arrow");
        arrowElement.innerText = "⬇";
        document.querySelectorAll(".track")[index].appendChild(arrowElement);
      }
    });
  };

  renderWinner = (gameModels) => {
    const winner = gameModels
      .map((gameModel) => gameModel.getName())
      .join(", ");
    this.winnerElement.innerText = `🏆최종 우승자:${winner}🏆`;
  };
}

export default GameView;
