// types
import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    isLoading: false,
    status: "",
    message: ""
 }
 
// ==============================|| SLICE - REGISTRATION ||============================== //

const registration = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        registrationPending (state) {
            state.isLoading= true
        },
        registrationSuccess (state, {payload}) {
            state.isLoading= false
            state.status = "success"
            state.message = payload
        },
        registrationError (state, {payload}) {
            state.isLoading = false
            state.status = "error"
            state.message = payload
        }
  
    }
});

export default registration.reducer;

export const {registrationPending,registrationSuccess, registrationError} = registration.actions;
