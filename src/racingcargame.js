import RacingCar from "./racingcar.js";
import judge from "./judge.js";

export default class RacingCarGame {
  splitCarNameListInput(carNameListInput) {
    this.carNameList = String(carNameListInput).split(",");
    return this.carNameList;
  }
}
