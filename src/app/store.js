import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import cartReducer from "../slices/cartSlice";
import itemDetailReducer from "../slices/itemDetailSlice";
import saveForLaterReducer from "../slices/saveForLaterSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    cart: cartReducer,
    itemDetail: itemDetailReducer,
    saveForLater: saveForLaterReducer
  },
});
