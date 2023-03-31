const { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } = require("./types")


export const addToCart = (obj) => {
    return {
        type: ADD_TO_CART,
        payLoad: obj
    }
}
export const removeFromCart = (obj) => {
    return {
        type: REMOVE_FROM_CART,
        payLoad: obj
    }
}
export const clearCart = () => {
    return {
        type: CLEAR_CART,
    }
}