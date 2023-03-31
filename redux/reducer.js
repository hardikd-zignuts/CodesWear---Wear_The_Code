import { ADD_TO_CART, REMOVE_FROM_CART } from "./types"

const initialState = {
    total: 0,
    product: []
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const curretData = state.product
            if (state.product.length === 0) {
                curretData.push(action.payLoad)
            } else if (state.product.some(item => item.id === action.payLoad.id)) {
                const index = state.product.findIndex(item => item.id === action.payLoad.id)
                curretData[index].quantity++;
                curretData[index].price = action.payLoad.price + curretData[index].price
            } else {
                curretData.push(action.payLoad)
            }
            return {
                ...state,
                total: state.total + 1,
                product: curretData
            }
        case REMOVE_FROM_CART:
            const tempData = state.product
            let index = tempData.findIndex(item => item.id === action.payLoad.id)
            tempData[index].quantity--;
            tempData[index].price = tempData[index].price - tempData[index].basePrice;
            if (tempData[index].quantity === 0) {
                tempData.splice(index, 1)
            }
            return {
                ...state,
                product: tempData,
                total: state.total - 1
            }

        default:
            return {
                ...state
            }
    }
}

export default CartReducer