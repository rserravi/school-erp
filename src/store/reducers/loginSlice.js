import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
   isLoading : false,
   isAuth: false,
   error: ""
}
 
const login = createSlice({
   name: "login",
   initialState,
   reducers:{
       loginPending: (state, action)=>{
           state.isLoading= true
       },
       loginSuccess: (state)=>{
           state.isLoading = false;
           state.isAuth = true;
           state.error = ""
       },
       loginFail: (state, {payload})=>{
           state.isLoading = false;
           state.error = payload
       },
   }
});
 

export default login.reducer;
export const {loginPending, loginSuccess, loginFail } = login.actions;

