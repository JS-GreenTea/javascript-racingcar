class RacingController {
  constructor(
    carNameInputView,
    trialCountInputView,
    racingProgressView,
    racingModel
  ) {
    this.carNameInputView = carNameInputView;
    this.trialCountInputView = trialCountInputView;
    this.racingProgressView = racingProgressView;
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

  startRacing() {
    this.renderTable();

    const trialCount = this.racingModel.trialCount;

    for (let i = 0; i < trialCount; i += 1) {
      const racingCars = this.racingModel.racingCars;
      this.startRound(racingCars, i);
    }
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
}

export default RacingController;

// east, west, all, south, north
