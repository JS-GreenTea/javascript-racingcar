import RacingController from "./controller/RacingController.js";
import RacingModel from "./model/RacingModel.js";
import CarNameInputView from "./view/CarNameInputView.js";
import RacingProgressView from "./view/RacingProgressView.js";
import ResultView from "./view/ResultView.js";
import TrialCountInputView from "./view/TrialCountInputView.js";

const carNameInputView = new CarNameInputView();
const trialCountInputView = new TrialCountInputView();
const racingProgressView = new RacingProgressView();
const resultView = new ResultView();
const racingModel = new RacingModel();

new RacingController(
  carNameInputView,
  trialCountInputView,
  racingProgressView,
  resultView,
  racingModel
);
