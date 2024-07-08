import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], //push
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //state == initalState
      console.log("acttion...", action); //type payload
      console.log("state...", state);
      console.log("action...", action.payload);
      console.log("state...", state.cart);
      state.cart.push(action.payload);
      //state will intialSatte
      //action ->type /payload / object
    },
    removeCart: (state, action) => {
      console.log("action payload...", action.payload);
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload
    });
      console.log("cart after removing...", state.cart);
    }
  },
});
//console.log("bookSlice...",bookSlice.action)
//console.log("bookSlice...",bookSlice.reducer)
export const { addToCart,removeCart } = bookSlice.actions;
export default bookSlice.reducer;