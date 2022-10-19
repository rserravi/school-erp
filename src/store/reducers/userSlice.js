import { createSlice } from "@reduxjs/toolkit";
 
// initial state
const initialState = {
   loggedUser : {},
   company: {},
   isloading : false,
   error: ""
}
 
// ==============================|| SLICE - USER ||============================== //

const user = createSlice({
   name: "user",
   initialState,
   reducers:{
       getUserPending: (state)=>{
           state.isloading = true
       },
       getUserSuccess: (state, {payload})=>{
           state.isloading = false
           state.loggedUser = payload
           state.error = ""
       },
       getUserFail: (state, {payload})=>{
           state.isloading = false;
           state.error = payload;
       },
   }
});
 
export default user.reducer;

export const{getUserPending,getUserSuccess, getUserFail}= user.actions;
