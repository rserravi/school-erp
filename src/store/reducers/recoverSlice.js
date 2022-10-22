// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    isLoading: false,
    emailSent: false,
    status: "",
    message: ""
 }
 
// ==============================|| SLICE - REGISTRATION ||============================== //

const recover = createSlice({
    name: 'recover',
    initialState,
    reducers: {
        recoverPending (state) {
            state.isLoading= true
        },
        recoverSuccess (state, {payload}) {
            state.isLoading= false
            state.status = "success"
            state.emailSent = true
            state.message = payload
        },
        recoverError (state, {payload}) {
            state.isLoading = false
            state.status = "error"
            state.message = payload
        }
  
    }
});

export default recover.reducer;

export const {recoverPending,recoverSuccess, recoverError} = recover.actions;
