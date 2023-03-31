


describe('Test for Hoodie Page', () => {

    it('After click on view button user should redirect to Product details page', () => {
        cy.visit('http://localhost:3000/hoodie')
        cy.get('#h1').click()

        cy.request('/hoodie?name=Alan%20Jones%20Clothing%20Men%27s%20Fleece%20Hooded%20Hoodie')
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).exist
            })


    })
})  