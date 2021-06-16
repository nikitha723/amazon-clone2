import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const saveForLaterSlice = createSlice({
    name: "saveForLater",
    initialState,
    reducers: {
        saveForLater: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromSaveForLater: (state, action) => {
            let index = state.items.findIndex(item => item.id === action.payload.id)
            let newSavedItems = [...state.items]
            if(index >= 0) {
                newSavedItems.splice(index, 1)
            } else {
                console.log('error in saved for later')
            }
            state.items = newSavedItems
        }
    }
})

export const { saveForLater, removeFromSaveForLater } = saveForLaterSlice.actions

export const selectSaveForLaterItems = (state) => state.saveForLater.items

export default saveForLaterSlice.reducer