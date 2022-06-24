class RacingModel {
  #racingCars;
  #trialCount;

  constructor() {
    this.#racingCars = [];
    this.#trialCount = 0;
  }

  get racingCars() {
    return [...this.#racingCars];
  }

  get trialCount() {
    return this.#trialCount;
  }

  set trialCount(count) {
    this.#trialCount = count;
  }

  addCar(carName) {
    this.#racingCars.push(carName);
  }

  reduceTrialCount() {
    this.#trialCount -= 1;
  }
}

export default RacingModel;
