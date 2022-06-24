import RacingController from "./controller/RacingController.js";
import RacingModel from "./model/RacingModel.js";
import CarNameInputView from "./view/CarNameInputView.js";

const carNameInputView = new CarNameInputView();
const racingModel = new RacingModel();
const racingController = new RacingController(carNameInputView, racingModel);
