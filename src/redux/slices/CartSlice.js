import { createSlice } from "@reduxjs/toolkit";
export const DataSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add:(state,action)=>{
            state = state.push(action.payload);
        },
    }

})
export const {add} = DataSlice.actions;
export default DataSlice.reducer;