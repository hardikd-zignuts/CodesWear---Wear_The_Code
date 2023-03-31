import { addToCart, clearCart, removeFromCart } from '../../../redux/actions';
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
        cy.contains('button', 'Add to cart').click()
        cy.contains('button', 'Add to cart').click()
        cy.wrap(store.dispatch(addToCart(obj)))
        cy.wrap(store.dispatch(addToCart(obj)))
        cy.wrap(store).invoke('getState')
            .then((state) => {
                expect(state.total).equal(2);
                expect(state.product[0]).equal(obj);
                expect(state.product[0].quantity).equal(2);
            })
    })
    it('Remove from Cart Action', () => {
        let obj = {
            id: 'h1',
            name: 'More Unisex-Adult Cotton Hooded Neck Printed Hoodie',
            price: 999,
            quantity: 1,
            basePrice: 999
        }
        cy.visit('http://localhost:3000/hoodie')
        cy.get('#h1').click()
        cy.contains('button', 'Add to cart').click()
        cy.wrap(store.dispatch(removeFromCart({ id: obj.id })))
        cy.wrap(store).invoke('getState')
            .then((state) => {
                expect(state.total).equal(1);
                expect(state.product[0].quantity).equal(1);
            })
    })
    it('Clear Cart Action', () => {

        cy.visit('http://localhost:3000/hoodie')
        cy.get('#h1').click()
        cy.contains('button', 'Add to cart').click()
        cy.wrap(store.dispatch(clearCart()))
        cy.wrap(store).invoke('getState')
            .then((state) => {
                expect(state.total).equal(0);
                expect(state.product.length).equal(0);
            })
    })

})
