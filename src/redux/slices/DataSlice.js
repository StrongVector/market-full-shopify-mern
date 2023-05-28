import { createSlice } from "@reduxjs/toolkit";
export const DataSlice = createSlice({
    name:'data',
    initialState:[],
    reducers:{
        getAll:(state,action)=>{
            state.data = action.payload;
            console.log(state.data);
        },
    }

})
export const {getAll} = DataSlice.actions;
export default DataSlice.reducer;