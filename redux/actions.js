const { ADD_TO_CART, REMOVE_FROM_CART } = require("./types")


const addToCart = (obj) => {
    return {
        type: ADD_TO_CART,
        payLoad: obj
    }
}
const removeFromCart = (obj) => {
    return {
        type: REMOVE_FROM_CART,
        payLoad: obj
    }
}

export { addToCart, removeFromCart }