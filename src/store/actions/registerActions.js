import { userRegistrationAPI } from "api/userApi";
import { registrationError, registrationPending, registrationSuccess } from "store/reducers/registerSlice";
 
//const dispatch= useDispatch();

export const userRegistration = (frmDt) => async (dispatch) =>{
   try {
       dispatch(registrationPending());
       const result = await userRegistrationAPI(frmDt)
       console.log(result.status);
       if (result.status === "error"){
        dispatch(registrationError(result.message))
       }
       else {
        dispatch(registrationSuccess(result.message))
       }
       
    
   } catch (error) {
       dispatch(registrationError(error.message))
   }
}
