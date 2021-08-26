import { AVATAR_TYPES } from "../../src/constants/avatar";

describe('Avatar Component',function(){
    it('change to next avatar',function(){
        cy.visit("http://localhost:9500/");
        cy.get('.next').click()
        cy.get("img")
          .invoke("attr", "src")
          .should("equal", `/images/${AVATAR_TYPES[1]}.png`);
    })

    it("change to prev avatar", function () {
      cy.visit("http://localhost:9500/");
      cy.get(".prev").click();
      cy.get("img")
        .invoke("attr", "src")
        .should("equal", `/images/${AVATAR_TYPES[4]}.png`);
    });
})