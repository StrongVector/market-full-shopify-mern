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
      
    },
    decQuantity: (state, action) => {
      const id = action.payload.id;
      const items = state.filter((el) => {
        return id === el.id;
      });
      let el = items[0];
     el.quantity -= 1;
     if(el.quantity == 0){
      state = state.filter((iteam)=>{
        return iteam.id != id;
      })
     }
      
    },

    removeEl: (state) => {
      console.log("remiving");
      state = state.filter((iteam,action)=>{
        return iteam.id != action.payload;
      })
    },
  },
});
export const { BuyEl, removeEl, incQuantity, decQuantity } = CartSlice.actions;
export default CartSlice.reducer;
