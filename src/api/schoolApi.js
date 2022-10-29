import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const equipmentUrl = rootUrl + "/equipment"
const classroomUrl = rootUrl + "/classroom"
const subjectUrl = rootUrl + "/subject"


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

