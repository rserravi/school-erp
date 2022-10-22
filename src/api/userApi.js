import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const loginUrl = rootUrl + "/user/login";
const userProfileUrl = rootUrl + "/user";
const logOutUrl = rootUrl + "/user/logout";
const newAccessJWTurl = rootUrl + "/tokens";
const userVerificationUrl = userProfileUrl + "/verify"
const recoverUrl = userProfileUrl + "/reset-password"

export const userLogin = (frmData) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(loginUrl, frmData);

            resolve(res.data);
            console.log("RESPUESTA DEL SERVIDOR AL LOGIN",res.data)

            if(res.data.status ==="success"){
                sessionStorage.setItem("accessJWT", res.data.accessJWT);
                localStorage.setItem(
                  "schoolERP",
                  JSON.stringify({ refreshJWT: res.data.refreshJWT })
                );
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const userRegistrationAPI = (frmData) =>{

    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(userProfileUrl, frmData);
            resolve(res.data);

            if(res.data.status ==="success"){
               resolve(res.data)
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const userRegistrationVerification = (frmData) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            console.log("Datos en userRegistration", frmData)
            const res = await axios.patch(userVerificationUrl, frmData);

            resolve(res.data);
            console.log("Status en userRegistration");
            console.log(res.data);
            if(res.data.status ==="success"){
               resolve(res.data)
            }
        } catch (error) {
            console.log("Error en userRegistration");
            reject({status:"error", message:error.error});
        }
    })
}


export const fetchUser = () =>{
    return new Promise( async(resolve, reject)=>{
        try {

            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                reject("Token not found!");
            }

            const res = await axios.get(userProfileUrl, {
                headers: {
                    Authorization :accessJWT,
                }
            });

            resolve(res.data);
            
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    })
}

export const fetchNewAccessJWT = () =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const {refreshJWT} = JSON.parse(localStorage.getItem("schoolERP"));
            if (!refreshJWT){
                reject("Token not found!");
            }
            const res = await axios.get(newAccessJWTurl, {
                headers: {
                    Authorization :refreshJWT,
                }
            });
            if(res.data.status ==="success"){
                console.log("NEW ACCESSJWT TOKEN FETCHED",res.data)
                sessionStorage.setItem("accessJWT", res.data.accessJWT);   
            } 
            resolve(true);
            
        } catch (error) {
            if (error.message === "Request failed with status code 403"){
                localStorage.removeItem("schoolERP");
            }
            reject(false);
        }
    })
}

export const userLogout = async() =>{
    try {
        const accessJWT = sessionStorage.getItem("accessJWT");
    if (!accessJWT){
        console.log("Token not found! (from userLogout)");
    }

    await axios.delete(logOutUrl, {
        headers: {
            Authorization :accessJWT,
        }
    });
    } catch (error) {
        console.log(error);
    }
}

export const RecoverPassword = (frmData) =>{

    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(recoverUrl, frmData);
            resolve(res.data);
   
            if(res.data.status ==="success"){
               resolve(res.data)
            }
        } catch (error) {
            reject(error);
        }
    })
}

export const CheckRecoverPin = (frmData)=>{
    return new Promise( async(resolve, reject)=>{
        try {
            console.log("Datos en checkRecoverPin", frmData)
            const res = await axios.patch(recoverUrl, frmData);

            resolve(res.data);
            console.log("Status en checkRecoverPin");
            console.log(res.data);
            if(res.data.status ==="success"){
               resolve(res.data)
            }
        } catch (error) {
            console.log("Error en checkRecoverPin");
            reject({status:"error", message:error.error});
        }
    })
}