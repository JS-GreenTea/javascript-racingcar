class RacingController {
  constructor(carNameInputView, trialCountInputView, racingModel) {
    this.carNameInputView = carNameInputView;
    this.trialCountInputView = trialCountInputView;
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
  }
}

export default RacingController;
