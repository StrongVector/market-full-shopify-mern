import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    BuyEl: (state, action) => {
      state.push(action.payload);
    },
    incQuantity: (state, action) => {
      console.log("incQuanty worked");
      const id = action.payload.id;
      const items = state.filter((el) => {
        return id === el.id;
      });
      let el = items[0];
      
      el.quantity += 1;
      
    //   console.log(`quantity in slice ${action.payload.quantity}`);
    },
    decQuantity: (state, action) => {
      const id = action.payload.id;
      const items = state.filter((el) => {
        return id === el.id;
      });
      let el = items[0];
     el.quantity -= 1;
      console.log(`quantity from slice ${action.payload.quantity}`);
    },

    removeEl: (state) => {
      console.log("remiving");
    },
  },
});
export const { BuyEl, removeEl, incQuantity, decQuantity } = CartSlice.actions;
export default CartSlice.reducer;
