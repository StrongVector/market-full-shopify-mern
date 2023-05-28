import { configureStore } from "@reduxjs/toolkit";
import CartSlice, { DataSlice } from "./slices/CartSlice";
// import DataSlice from "./slices/DataSlice";


const Store = configureStore({
    reducer:{
        cart:CartSlice,
        data:DataSlice,
        
       
    }
});
export default Store;