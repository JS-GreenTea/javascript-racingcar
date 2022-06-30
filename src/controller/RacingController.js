class RacingController {
  constructor(
    carNameInputView,
    trialCountInputView,
    racingProgressView,
    resultView,
    racingModel
  ) {
    this.carNameInputView = carNameInputView;
    this.trialCountInputView = trialCountInputView;
    this.racingProgressView = racingProgressView;
    this.resultView = resultView;
    this.racingModel = racingModel;
    this.bindClickEvent();
  }

  bindClickEvent() {
    this.carNameInputView.submitBtn.addEventListener(
      "click",
      this.carNameSubmitHandler.bind(this)
    );
    this.trialCountInputView.submitBtn.addEventListener(
      "click",
      this.trialCountSubmitHandler.bind(this)
    );
    this.resultView.target.addEventListener(
      "click",
      this.restartBtnHandler.bind(this)
    );
  }

  carNameSubmitHandler(event) {
    const carNameList = this.carNameInputView.getInputValue().split(", ");
    carNameList.forEach((carName) => this.racingModel.addCar(carName));
  }

  trialCountSubmitHandler(event) {
    const trialCount = this.trialCountInputView.getInputValue();
    this.racingModel.trialCount = trialCount;
    this.startRacing();
  }

  restartBtnHandler(event) {
    if (event.target.id === "racing-restart-btn") {
      this.racingModel.init();
      this.racingProgressView.init();
      this.resultView.init();
    }
  }

  startRacing() {
    this.renderTable();

    const trialCount = this.racingModel.trialCount;
    let racingCars = this.racingModel.racingCars;

    for (let i = 0; i < trialCount; i += 1) {
      racingCars = this.racingModel.racingCars;
      this.startRound(racingCars, i);
    }
    racingCars = this.racingModel.racingCars;
    this.resultView.render(this.checkWinners(racingCars));
  }

  renderTable() {
    const racingCarsName = this.racingModel.racingCarsName;
    this.racingProgressView.render(racingCarsName);
  }

  startRound(racingCars, round) {
    this.racingProgressView.addTableRow(round, Object.keys(racingCars).length);
    Object.keys(racingCars).forEach((carName, idx) => {
      if (this.isCarRun()) {
        this.racingModel.increaseCarDistance(carName);
        this.racingProgressView.updateTd(racingCars[carName], idx, "⬇️️");
      }
    });
  }

  isCarRun() {
    return Math.floor(Math.random() * 10) >= 4 ? true : false;
  }

  checkWinners(racingCars) {
    console.log(racingCars);
    const winDistance = Math.max(...Object.values(racingCars));
    const result = Object.entries(racingCars)
      .filter(([_, distance]) => distance === winDistance)
      .map(([carName, _]) => carName);
    return result;
  }
}

export default RacingController;

// east, west, all, south, north
