import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import dataSlice from "./dataSlice";
// import { DataSlice } from ";


const Store = configureStore({
    reducer:{cart:CartSlice
    ,data:dataSlice}
});
export default Store;