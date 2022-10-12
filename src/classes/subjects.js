import { ThemeProvider } from "@emotion/react";
import { Student, Staff } from "./humans";

OpenClosingTimes = {
    Starts : new Date(),
    Ends: new Date()
}


export class Session {

    constructor(id, code, description, type, subject, lectureTime, teachers, classroom, specialReq, assistants, videoConfLink, extracost){
        this.id = id;
        this.code = code;
        this.description = description;
        this.type = type;
        this.subject = subject;
        this.lectureTime = lectureTime;
        this.teachers = teachers;
        this.classroom = classroom;
        this.specialReq = specialReq;
        this.assistants = assistants;
        this.videoConfLink = videoConfLink;
        this.extracost = extracost;
    }

    get students() {
        return this.assistants;
    }

    startTime(){
        return this.lectureTime.Starts.toLocaleTimeString();
    }

    endTime(){
        return this.lectureTime.Ends.toLocaleTimeString();
    }
    
}

export class Equipment {
    constructor (id, code, name, description, image, cost, reserved){
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.image = image;
        this.cost = cost;
        this.reserved = reserved;
    }

    getReservedDays(){
        var finalojb = [];
        this.reserved.forEach(element => {
            var dateString = element.toLocaleDateString();
            finalojb.push(dateString);
        });
        return finalojb;
    }

    checkReservation(date){
        return false;
    }
}

export class Classroom {
    constructor(id, code, name, image, capacity, equipment, weekavailability, blackFlagCal){
        this.id = id;
        this.code = code;
        this.name = name;
        this.image = image;
        this.capacity = capacity;
        this.equipment = equipment;
        this.weekavailability = weekavailability;
        this.blackFlagCal = blackFlagCal;
    }

    getAgenda(){
        return []
    }

    checkAvailability(date){
        return false;
    }
}

export class Subject {
    constructor (id, code, name, specialReq, tests, costPrevision){
        this.id = id;
        this.code = code;
        this.name = name;
        this.specialReq = specialReq;
        this.tests = tests;
        this.costPrevision = costPrevision;
    }

    checkSpecialRequest (equipment){
        var result = false;
        this.specialReq.forEach(element =>{
            if (element.code = equipment.code){
                result = true;
            }
        })
        return result;
    }

    // Returns an array of Students
    getStudents (){
        return [];
    }

    //Returns an array of Teachers
    getTeachers (){
        return [];
    }

    //Returns an array of Students and its Grades (Student.code, student.fullName, student.grades[subjectId])
    getGrades (){
        return [];
    }
}