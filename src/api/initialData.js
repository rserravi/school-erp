export const newEquipment = {
    "name": "Computer 1",
    "description": "Pc computer with office and Photoshop, 16Gb Ram"
}

export const newClassroom = {
    "name": "Classroom 1",
    "code": "CLR1",
    "picture":{"filename":"","file":"","type":"jpg"},
    "capacity": 15,
    "equipment": [{
       "equipmentId": "635ce7a1c232aca19d7f0f6e"
    }],
    "weekAvailability":{
       "monday":{
          "open1": "8:30",
          "close1": "13: 00",
          "open2": "15:30",
          "close2": "20: 00"
       },
       "tuesday":{
          "open1": "8:30",
          "close1": "13: 00",
          "open2": "15:30",
          "close2": "20: 00"
       },
       "wednesday":{
          "open1": "8:30",
          "close1": "13: 00",
          "open2": "15:30",
          "close2": "20: 00"
       },
       "thursday":{
          "open1": "8:30",
          "close1": "13: 00",
          "open2": "15:30",
          "close2": "20: 00"
       },
       "friday":{
          "open1": "8:30",
          "close1": "13: 00",
          "open2": "15:30",
          "close2": "20: 00"
       },
       "saturday":{
          "open1": "8:30",
          "close1": "13: 00",
          "open2": "",
          "close2": ""
       },
       "sunday":{
          "open1": "",
          "close1": "",
          "open2": "",
          "close2": ""
       }
    }
}

export const newSubject = {
    "name": "Maths",
    "code": "PG1",
    "specialReq" :[{
       "equipmentId": "635ce7a1c232aca19d7f0f6e"
    }],
    "tests":[],
    "costPrevision":350.50
 }