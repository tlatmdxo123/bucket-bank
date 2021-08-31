import { AVATAR_TYPES } from "../../src/constants/avatar";

describe('Avatar Component',function(){
    it('change to next avatar',function(){
        cy.visit("http://localhost:9500/set-user");
        cy.get('.next').click()
        cy.get("img")
          .invoke("attr", "src")
          .should("equal", `/images/${AVATAR_TYPES[1]}.png`);
    })

    it("change to prev avatar", function () {
      cy.visit("http://localhost:9500/set-user");
      cy.get(".prev").click();
      cy.get("img")
        .invoke("attr", "src")
        .should("equal", `/images/${AVATAR_TYPES[4]}.png`);
    });
})

describe("UserInfo Component", function () {
  it("이름 입력시 active 활성화", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=nameInput]").type("심승태");
    cy.get("div[data-test-id=nameInput]").should("have.class", "active");
  });
  
  it("이름 잘못된 형식 입력시 에러메세지 출력", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=nameInput]").type('123');
    cy.get("div[data-test-id=nameInput]").should('have.class','error');
    cy.get("p[data-test-id=error]").should('have.text','문자만 입력 가능합니다');
  });

  it("월급 입력시 active 활성화", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=payInput]").type("100000");
    cy.get("div[data-test-id=payInput]").should("have.class", "active");
  });

  it("월급 잘못된 형식 입력시 에러메세지 출력", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=payInput]").type("10000원");
    cy.get("div[data-test-id=payInput]").should("have.class", "error");
    cy.get("p[data-test-id=error]").should(
      "have.text",
      "숫자만 입력 가능합니다"
    );
  });

  it("월급날 입력시 active 활성화", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=dateInput]").type("21");
    cy.get("div[data-test-id=dateInput]").should("have.class", "active");
  });

  it("월급 잘못된 형식 입력시 에러메세지 출력", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=dateInput]").type("42");
    cy.get("div[data-test-id=dateInput]").should("have.class", "error");
    cy.get("p[data-test-id=error]").should(
      "have.text",
      "1~31의 날짜만 입력 가능합니다"
    );
  });
  
});

describe('submit button component',function(){
  it("모든 input이 정상 아닐시 비활성화", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=nameInput]").type("심승태");
    cy.get("div[data-test-id=payInput]").type("100000원");
    cy.get("div[data-test-id=dateInput]").type("21");

    cy.get("button[data-test-id=userInfoSubmit]").should(
      "have.attr",
      "disabled"
    );
  });
  it("모든 input이 정상입력시 활성화", function () {
    cy.visit("http://localhost:9500/set-user");
    cy.get("div[data-test-id=nameInput]").type("심승태");
    cy.get("div[data-test-id=payInput]").type("100000");
    cy.get("div[data-test-id=dateInput]").type("21");

    cy.get("button[data-test-id=userInfoSubmit]").should(
      "not.have.attr",
      "disabled"
    );
  });
  it('클릭시 main page로 이동',function(){
    cy.get("button[data-test-id=userInfoSubmit]").click();
    cy.url().should("eq", "http://localhost:9500/");
  })
})