import RacingCarGame from "./racingcargame.js";
import Player from "./player.js";

const racingCarGame = new RacingCarGame();
const player = new Player();

const onClickCarNameListInput = (e) => {
  e.preventDefault();
  player.getCarNameListByInputTag();
  racingCarGame.isCarNameListInputValid(player.carNameListInput);
};

const onClickRaceCountInput = (e) => {
  e.preventDefault();
  player.getRaceCountByInputTag();
  racingCarGame.isRaceCountInputValid(player.raceCountInput);
  racingCarGame.play(player.carNameListInput, player.raceCountInput);
};

document
  .getElementById("carNameSubmit")
  .addEventListener("click", onClickCarNameListInput);
document
  .getElementById("raceCountSubmit")
  .addEventListener("click", onClickRaceCountInput);
