export default class Racingcar {
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
}
