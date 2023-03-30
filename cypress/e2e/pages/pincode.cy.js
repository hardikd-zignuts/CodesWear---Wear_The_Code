
describe('Test for Pincode Verifaction', () => {

    it('After click on check avaliblity button enterd wrong pincode check ', () => {
        cy.visit("http://localhost:3000/product/Hoodie/Alan%20Jones%20Clothing%20Men's%20Fleece%20Hooded%20Hoodie")

        cy.get('input[type="number"]')
            .type(365620)

        cy.get('#check-btn').click()


        cy.wait(1000)
    })
    it('After click on check avaliblity button enterd Right pincode check ', () => {
        cy.visit("http://localhost:3000/product/Hoodie/Alan%20Jones%20Clothing%20Men's%20Fleece%20Hooded%20Hoodie")


        cy.get('input[type="number"]').clear()
            .type(365621)
        cy.get('#check-btn').click()
    })
})  