import { isLengthLessThen } from "../validation.js";
import { pickRandomNumInRange } from "../util.js";
import config from "../config.js";

class RacingController {
  constructor(
    carNameInputView,
    trialCountInputView,
    racingProgressView,
    resultView,
    racingModel,
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
      this.carNameSubmitHandler.bind(this),
    );
    this.trialCountInputView.submitBtn.addEventListener(
      "click",
      this.trialCountSubmitHandler.bind(this),
    );
    this.resultView.target.addEventListener(
      "click",
      this.restartBtnHandler.bind(this),
    );
  }

  carNameSubmitHandler() {
    const carNameList = this.carNameInputView.getInputValue().split(", ");
    if (!isLengthLessThen(carNameList, 5)) {
      alert("5자 이하의 이름을 입력해주세요.");
      return;
    }
    carNameList.forEach(carName => this.racingModel.addCar(carName));
  }

  trialCountSubmitHandler() {
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

    const { trialCount } = this.racingModel;
    let { racingCars } = this.racingModel;

    for (let i = 0; i < trialCount; i += 1) {
      racingCars = this.racingModel.racingCars;
      this.startRound(racingCars, i);
    }
    racingCars = this.racingModel.racingCars;
    this.resultView.render(this.checkWinners(racingCars));
  }

  renderTable() {
    const { racingCarsName } = this.racingModel;
    this.racingProgressView.render(racingCarsName);
  }

  startRound(racingCars, round) {
    this.racingProgressView.addTableRow(round, Object.keys(racingCars).length);
    Object.keys(racingCars).forEach((carName, idx) => {
      this.moveCar(carName, racingCars[carName], idx);
    });
  }

  moveCar(carName, distance, carIdx) {
    if (pickRandomNumInRange(0, 10) >= config.moveCondition) {
      this.racingModel.increaseCarDistance(carName);
      this.racingProgressView.updateTd(distance, carIdx, "⬇️️");
    }
  }

  checkWinners(racingCars) {
    const winDistance = Math.max(...Object.values(racingCars));
    const result = Object.entries(racingCars)
      .filter(([, distance]) => distance === winDistance)
      .map(([carName]) => carName);
    return result;
  }
}

export default RacingController;
