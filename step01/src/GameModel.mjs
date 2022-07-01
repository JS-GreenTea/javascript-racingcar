class GameModel {
  constructor(name) {
    this.name = name;
    this.count = 0;
  }

  countIncrement = () => {
    this.count += 1;
  };

  getCount = () => {
    return this.count;
  };

  getName = () => {
    return this.name;
  };
}

export default GameModel;
