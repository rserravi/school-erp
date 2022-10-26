import { createSlice } from "@reduxjs/toolkit";
 
// initial state
const initialState = {
   loggedUser : {},
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
       resetUser: (state)=>{
           localStorage.removeItem("schoolERP");
           sessionStorage.removeItem("accessJWT");
           state.loggedUser = {}
           state.isloading = false
           state.error = ""
       },
       setUser: (state, {payload})=>{
           
           state.loggedUser = payload
       }
   }
});
 
export default user.reducer;

export const{getUserPending,getUserSuccess, getUserFail, resetUser, setUser}= user.actions;
