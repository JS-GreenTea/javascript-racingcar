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
}
