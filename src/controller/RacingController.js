class RacingController {
  constructor(carNameInputView, racingModel) {
    this.carNameInputView = carNameInputView;
    this.racingModel = racingModel;
    this.bindClickEvent();
  }

  bindClickEvent() {
    this.carNameInputView.submitBtn.addEventListener(
      "click",
      this.carNameSubmitHandler.bind(this)
    );
  }

  carNameSubmitHandler(event) {
    event.preventDefault();

    const carNameList = this.carNameInputView.getInputValue().split(", ");
    carNameList.forEach((carName) => this.racingModel.addCar(carName));
  }
}

export default RacingController;
