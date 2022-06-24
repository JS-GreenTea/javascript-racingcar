import RacingController from "./controller/RacingController.js";
import RacingModel from "./model/RacingModel.js";
import CarNameInputView from "./view/CarNameInputView.js";
import TrialCountInputView from "./view/TrialCountInputView.js";

const carNameInputView = new CarNameInputView();
const trialCountInputView = new TrialCountInputView();
const racingModel = new RacingModel();

new RacingController(carNameInputView, trialCountInputView, racingModel);
