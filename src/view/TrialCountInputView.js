class TrialCountInputView {
  constructor() {
    this.inputElement = document.querySelector("input[name=trial-count]");
    this.submitBtn = document.querySelector("#trial-count-submit-btn");
  }

  getInputValue() {
    return this.inputElement.value;
  }
}

export default TrialCountInputView;
