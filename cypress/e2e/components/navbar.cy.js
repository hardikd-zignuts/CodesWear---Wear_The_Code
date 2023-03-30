describe('Navbar Test Cases', () => {

    it('Logo click test case for Routing', () => {

        cy.visit('http://localhost:3000/')
        cy.get('#logo').click()
        cy.visit('http://localhost:3000/')
    })

    it('Hoodie test case for Routing', () => {

        cy.visit('http://localhost:3000/')
        cy.get('#hoodie').click()
        cy.visit('http://localhost:3000/hoodie')
    })
    it('T Shirts test case for Routing', () => {

        cy.visit('http://localhost:3000/')
        cy.get('#tshirt').click()
        cy.visit('http://localhost:3000/tshirts')
    })
    it('Sticker test case for Routing', () => {

        cy.visit('http://localhost:3000/')
        cy.get('#sticker').click()
        cy.visit('http://localhost:3000/sticker')
    })
    it('Mug test case for Routing', () => {

        cy.visit('http://localhost:3000/')
        cy.get('#mug').click()
        cy.visit('http://localhost:3000/mug')
    })

})