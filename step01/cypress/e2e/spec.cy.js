describe("Racing Car Test", () => {
  it("enter domain", () => {
    cy.visit("http://127.0.0.1:5500/");
  });
  it("input car name", () => {
    cy.get("#car-names").type("john,choi,park");
    cy.get("#car-button").click();
    cy.get(":nth-child(1) > .car").contains("john").should("exist");
    cy.get(":nth-child(2) > .car").contains("choi").should("exist");
    cy.get(":nth-child(3) > .car").contains("park").should("exist");
  });

  it("input count", () => {
    cy.get("#play-count").type(10);
    cy.get("#play-button").click();
  });

  it("check each forward count", () => {
    let arr = [0, 0, 0];
    cy.get("#game > :nth-child(1)")
      .children()
      .each(() => {
        arr[0] += 1;
      });
    cy.get("#game > :nth-child(2)")
      .children()
      .each(() => {
        arr[1] += 1;
      });
    cy.get("#game > :nth-child(3)")
      .children()
      .each(() => {
        arr[2] += 1;
      });

    const names = ["john", "choi", "park"];
    const maxValue = Math.max(arr);
    const answers = [];
    for (let i = 0; i < 3; i++) {
      if (arr[i] === maxValue) {
        answers.append(names[i]);
      }
    }
    setTimeout(() => {
      cy.get("#winner").contains(`🏆최종 우승자:${answers.join(", ")}🏆`);
    }, 1000);
  });

  it("click restart", () => {
    cy.get("#restart-button").click();
    cy.get("#game").children().should("not.exist");
  });
});

describe("test not valid input", () => {
  it("check not valid", () => {
    cy.get("#car-names").type("johnnn,choi,park");
    cy.get("#car-button").click();
    cy.get(":nth-child(1) > .car").should("not.exist");
  });
});
