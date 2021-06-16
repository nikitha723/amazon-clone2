import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id)
            let newCart = [...state.items] //copying the items array so tat the original array doesnot mutate
            if(index >= 0) {
                //item exist
                newCart.splice(index, 1) 
            } 
            else {
                console.log(`cant remove product id: ${action.payload.id}`)
            }
            state.items = newCart
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectItems = (state) => state.cart.items
export const selectTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0)

export default cartSlice.reducer