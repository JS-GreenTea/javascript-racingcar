class RacingModel {
  #racingCars;

  constructor() {
    this.#racingCars = [];
  }

  get racingCars() {
    return [...this.#racingCars];
  }

  addCar(carName) {
    this.#racingCars.push(carName);
  }
}

export default RacingModel;
