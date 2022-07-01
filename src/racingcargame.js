import RacingCar from "./racingcar.js";
import judge from "./judge.js";

export default class RacingCarGame {
  splitCarNameListInput(carNameListInput) {
    this.carNameList = String(carNameListInput).split(",");
    return this.carNameList;
  }

  isCarNameListInputValid(carNameListInput) {
    this.carNameList = this.splitCarNameListInput(carNameListInput);
    console.log(this.carNameList);

    if (this.carNameList.length > 5) {
      alert("5대 이하의 자동차를 입력해주세요.");
      location.reload();
      return false;
    }

    this.carNameList.forEach((carName) => {
      if (carName.length > 5) {
        alert("차 이름은 5자 이하로 입력해주세요.");
        location.reload();
        return false;
      }
    });

    return true;
  }

  isRaceCountInputValid(raceCountInput) {
    if (!/^\d+$/.test(raceCountInput)) {
      alert("시도할 횟수는 숫자로만 입력해주세요.");
      location.reload();
      return false;
    }
    return true;
  }
}
