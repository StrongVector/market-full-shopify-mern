import { createSlice } from "@reduxjs/toolkit";
import FoodList from "../Data";




const DataSlice = createSlice({
    name: 'data',
    initialState:FoodList,
    reducers:{
        getAll:(state)=>{
            state = FoodList;  
        },
        getFilterd:(state,action)=>{
            state =   action.payload;
            console.log('zoll pass');
        },
     
  

    
    }

});
export const {getAll,getFilterd}= DataSlice.actions;
export default DataSlice.reducer;