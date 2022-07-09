class RacingModel {
  #racingCars;
  #trialCount;

  constructor() {
    this.init();
  }

  init() {
    this.#racingCars = {};
    this.#trialCount = 0;
  }

  get racingCars() {
    return { ...this.#racingCars };
  }

  get racingCarsName() {
    return Object.keys(this.#racingCars);
  }

  get trialCount() {
    return this.#trialCount;
  }

  set trialCount(count) {
    this.#trialCount = count;
  }

  addCar(carName) {
    this.#racingCars[carName] = 0;
  }

  increaseCarDistance(carName) {
    this.#racingCars[carName] += 1;
  }

  reduceTrialCount() {
    this.#trialCount -= 1;
  }
}

export default RacingModel;
