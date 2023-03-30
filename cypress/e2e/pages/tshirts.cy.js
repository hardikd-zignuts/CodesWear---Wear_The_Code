describe('Test for t shirts Page', () => {

    it('After click on view button user should redirect to Product details page', () => {
        cy.visit('http://localhost:3000/tshirts')
        cy.get('#t1').click()

        cy.request('/tshirts?name=Amazon%20Brand%20-%20Symbol%20Men%27s%20Regular%20Polo%20Shirts')
            .then(response => {
                expect(response.status).to.equal(200)
                expect(response.body).exist
            })


    })
})  