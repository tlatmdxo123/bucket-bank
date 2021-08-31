describe('Menu Component',function(){
    before(() => {
        localStorage.setItem('user_id','test')
    })
    it('menu아이콘 클릭시 메뉴 활성화',function(){
        cy.visit("http://localhost:9500/");
        cy.get('button[data-test-id=menuBtn]').click()
        cy.get('div[data-test-id=activeMenu]')
    })
    it('list클릭시 해당 페이지로 이동',function(){
        const firstMenu = cy.get("li[data-test-id=menu-list]:first")
        firstMenu.click();
        firstMenu.should("have.class", "active");
        cy.url().should("eq", "http://localhost:9500/pay-history");
    })
})