describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  const SELECTOR = {
    CAR_NAME_INPUT: "#car-name",
    TRIAL_COUNT_INPUT: "#trial-count",
    CAR_NAME_SUBMIT: "#car-name-submit-btn",
    TRIAL_COUNT_SUBMIT: "#trial-count-submit-btn",
    PROGRESS: "#racing-progress-table",
    RESULT: "#result",
    RESTART_BTN: "#racing-restart-btn",
  };

  before(() => {
    cy.visit("../index.html");
    Cypress.Commands.add("typeCarNameInput", (carNameInput = "") => {
      cy.get(SELECTOR.CAR_NAME_INPUT).clear();
      cy.get(SELECTOR.CAR_NAME_INPUT).type(carNameInput);
      cy.get(SELECTOR.CAR_NAME_SUBMIT).click();
    });
    Cypress.Commands.add("typeTrialCountInput", (trialCountInput = 0) => {
      cy.get(SELECTOR.TRIAL_COUNT_INPUT).clear();
      cy.get(SELECTOR.TRIAL_COUNT_INPUT).type(trialCountInput);
      cy.get(SELECTOR.TRIAL_COUNT_SUBMIT).click();
    });
  });

  it("자동차 이름이 5자 이상인 경우, alert가 호출되어야 한다.", () => {
    const alertStub = cy.stub();
    const invalidInput = "singco, fry";

    cy.on("window:alert", alertStub);

    // when
    cy.get(SELECTOR.CAR_NAME_INPUT).type(invalidInput);

    // then
    cy.get(SELECTOR.CAR_NAME_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("이름이 입력되지 않은 경우, alert가 호출되어야 한다.", () => {
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);

    // when
    cy.get(SELECTOR.TRIAL_COUNT_INPUT).type(3);

    // then
    cy.get(SELECTOR.TRIAL_COUNT_SUBMIT)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });

  it("게임이 종료된 경우, 게임 결과 형식이 요구사항과 일치해야 한다.", () => {
    cy.typeCarNameInput("norh, souh, east, west, all");
    cy.typeTrialCountInput(10);

    cy.get(SELECTOR.PROGRESS).should("be.visible");
    cy.get(SELECTOR.RESULT).should("be.visible");
    cy.get(SELECTOR.RESTART_BTN).should("be.visible");
  });

  it("다시 시작하기 버튼을 누를 경우, 게임을 다시 시작할 수 있다.", () => {
    cy.get(SELECTOR.RESTART_BTN).click();

    cy.get(SELECTOR.CAR_NAME_INPUT).should("have.value", "");
    cy.get(SELECTOR.TRIAL_COUNT_INPUT).should("have.value", "");
  });
});
