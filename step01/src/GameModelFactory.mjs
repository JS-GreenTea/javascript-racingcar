import GameModel from "./GameModel.mjs";

class GameModelFactory {
  createGameModels = (inputString) => {
    return this.validator(inputString).map((name) => new GameModel(name));
  };

  validator = (inputString) => {
    function validSplit(nameString) {
      return nameString.split(",");
    }
    function validateName(names) {
      let isValid = true;
      names.forEach((name) => {
        if (isNameLength(name.length)) isValid = false;
      });
      return isValid ? names : [];
    }
    function isNameLength(nameLength) {
      return !(0 < nameLength && nameLength <= 5);
    }

    const names = validSplit(inputString);
    return validateName(names);
  };
}

export default GameModelFactory;
