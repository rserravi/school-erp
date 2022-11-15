import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const equipmentUrl = rootUrl + "/equipment"
const classroomUrl = rootUrl + "/classroom"
const subjectUrl = rootUrl + "/subject"
const personUrl = rootUrl + "/person"


export const CreateEquipment = (frmData, mongoDataBase) =>{

    const url = equipmentUrl + "?db=" + mongoDataBase
    console.log("CREANDO EQUIPO EN ", url)

    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(url, frmData);

            resolve(res.data);
            console.log("SERVER Answer to POST: equipment",res.data)
        } catch (error) {
            reject(error);
        }
    })
}

export const CreateClassroom = (frmData, mongoDataBase) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(classroomUrl + "?db=" + mongoDataBase, frmData);

            resolve(res.data);
            console.log("SERVER Answer to POST: classroom",res.data)
        } catch (error) {
            reject(error);
        }
    })
}

export const CreateSubject = (frmData, mongoDataBase) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(subjectUrl + "?db=" + mongoDataBase, frmData);

            resolve(res.data);
            console.log("SERVER Answer to POST: subject",res.data)
        } catch (error) {
            reject(error);
        }
    })
}

export const CreatePerson = (frmData, mongoDataBase) =>{
    return new Promise( async(resolve, reject)=>{
        try {
            const res = await axios.post(personUrl + "?db=" + mongoDataBase, frmData);

            resolve(res.data);
            console.log("SERVER Answer to POST: person",res.data)
        } catch (error) {
            reject(error);
        }
    })
}

export const GetAllPeople = (mongoDataBase)=>{
    return new Promise( async(resolve, reject)=>{
        //console.log("GET ALL CUSTOMERTS")
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                console.log("TOKEN NOT FOUND");
                reject("Token not found!");
            }
            //console.log("Token Found", accessJWT);
            
            await axios.get(personUrl + "?db=" + mongoDataBase, {
                headers: {
                    Authorization :accessJWT,
                },
                timeout:3000
            }).then((data)=>{
                //console.log("DATA EN GET PEOPLE",data)
                resolve(data.data);
            }).catch((error)=>{
                console.log ("ERROR EN AXIOS", error)
            })
            
            
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    })
}

export const GettAllInbound = (mongoDataBase)=>{
    return new Promise( async(resolve, reject)=>{
        //console.log("GET ALL CUSTOMERTS")
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                console.log("TOKEN NOT FOUND");
                reject("Token not found!");
            }
            //console.log("Token Found", accessJWT);
            
            await axios.get(personUrl + "?db=" + mongoDataBase +"&filter=Inbound", {
                headers: {
                    Authorization :accessJWT,
                },
                timeout:3000
            }).then((data)=>{
                //console.log("DATA EN GET PEOPLE",data)
                resolve(data.data);
            }).catch((error)=>{
                console.log ("ERROR EN AXIOS", error)
            })
            
            
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    })
}

export const GetAllStudents = (mongoDataBase)=>{
    return new Promise( async(resolve, reject)=>{
        try {
            const accessJWT = sessionStorage.getItem("accessJWT");
            if (!accessJWT){
                console.log("TOKEN NOT FOUND");
                reject("Token not found!");
            }
            //console.log("Token Found", accessJWT);
            
            await axios.get(personUrl + "?db=" + mongoDataBase +"&filter=Student", {
                headers: {
                    Authorization :accessJWT,
                },
                timeout:3000
            }).then((data)=>{
                //console.log("DATA EN GET PEOPLE",data)
                resolve(data.data);
            }).catch((error)=>{
                console.log ("ERROR EN AXIOS", error)
            })
            
            
        } catch (error) {
            console.log(error);
            reject(error.message);
        }
    })
}


