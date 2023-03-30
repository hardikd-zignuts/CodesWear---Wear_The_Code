
/* This is a test case for the navbar. */
describe('Navbar Test Cases', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it("Cart should be visible when user click on cart button", () => {
        cy.get('#cart').should('not.be.visible')
        cy.get('#cart-open').click()
        cy.get('#cart').should('be.visible')
        cy.get('#cart-close').click()
        cy.get('#cart').should('not.be.visible')
    })
    it("Cart class should be change when user click on cart button", () => {
        cy.get('#cart').should('have.class', 'translate-x-full')
        cy.get('#cart-open').click()
        cy.get('#cart').should('have.class', 'translate-x-0')
        cy.get('#cart').should('not.have.class', 'hidden')
        cy.get('#cart-close').click()
        cy.get('#cart').should('have.class', 'hidden translate-x-full')
        cy.get('#cart').should('not.have.class', 'translate-x-0')
    })
})

/* This is a test case for the navbar. */
describe('Navbar Test Cases', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })


    it('Logo click test case for Routing', () => {

        cy.get('#logo').click()
        cy.visit('http://localhost:3000/')
    })

    it('Hoodie test case for Routing', () => {

        cy.get('#hoodie').click()
        cy.visit('http://localhost:3000/hoodie')
    })
    it('T Shirts test case for Routing', () => {

        cy.get('#tshirt').click()
        cy.visit('http://localhost:3000/tshirts')
    })
    it('Sticker test case for Routing', () => {

        cy.get('#sticker').click()
        cy.visit('http://localhost:3000/sticker')
    })
    it('Mug test case for Routing', () => {

        cy.get('#mug').click()
        cy.visit('http://localhost:3000/mug')
    })

})

