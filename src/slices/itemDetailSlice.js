import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    details: []
}

export const itemDetailSlice = createSlice({
    name: "itemDetail",
    initialState,
    reducers: {
        addItemDetails: (state, action) => {
            state.details = [action.payload]
        },
       
    }
})

export const { addItemDetails } = itemDetailSlice.actions

export const selectItemDetail = (state) => state.itemDetail.details

export default itemDetailSlice.reducer