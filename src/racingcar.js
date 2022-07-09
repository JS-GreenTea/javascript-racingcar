export default class Racingcar {
  constructor(carOrder, carName, raceCount) {
    this.carOrder = carOrder;
    this.carName = carName;
    this.raceCount = raceCount;
    this.moveCount = 0;
  }

  findParentDiv(divClassName) {
    return document.getElementsByClassName(`${divClassName}`)[0];
  }

  createChildDiv(divClassName, innerText) {
    this.childDiv = document.createElement("div");
    this.childDiv.className = divClassName;
    this.childDiv.innerText = innerText;
    return this.childDiv;
  }

  makeEachCarDiv(carName) {
    this.racingResultDiv = this.findParentDiv("racingResult");
    this.carDiv = this.createChildDiv("car", " ");
    this.carNameDiv = this.createChildDiv("carNameLabel", carName);
    this.racingResultDiv.append(this.carDiv);
    this.carDiv.append(this.carNameDiv);
  }

  accelCar(raceCount) {
    this.racingResultDiv = this.findParentDiv("racingResult");
    this.carDiv = document.getElementsByClassName("car")[this.carOrder];
    for (let i = 0; i < raceCount; i += 1) {
      if (this.isAccelValid()) {
        this.countDiv = this.createChildDiv("count", "⬇️");
        this.carDiv.append(this.countDiv);
        this.moveCount = this.moveCount + 1;
      }
    }
  }

  isAccelValid() {
    return Math.floor(Math.random() * 9) >= 4;
  }
}
