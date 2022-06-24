class CarNameInputView {
  constructor() {
    this.inputElement = document.querySelector("input[name=car-name]");
    this.submitBtn = document.querySelector("#car-name-submit-btn");
  }

  getInputValue() {
    return this.inputElement.value;
  }
}

export default CarNameInputView;
