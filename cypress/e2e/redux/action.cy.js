import { addToCart } from '../../../redux/actions';
import store from './../../../redux/store';

describe('Redux Store Testing When Action Dispatch', () => {
    it('Add to Cart Action', () => {
        let obj = {
            id: 'h1',
            name: 'More Unisex-Adult Cotton Hooded Neck Printed Hoodie',
            price: 999,
            quantity: 1,
            basePrice: 999
        }
        cy.visit('http://localhost:3000/hoodie')
        cy.get('#h1').click()
        cy.wrap(store.dispatch(addToCart(obj)))
        cy.wrap(store).invoke('getState')
            .then((state) => {
                expect(state.total).equal(1);
                expect(state.product[0]).equal(obj);
            })
    })
})
