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

 export const newLead = 
 {
   "firstname" : "Marta",
   "lastname" : "Sigüenza Llopis",
   "type": "Inbound",
   "picture":{
      "fileName":"",
      "file":"",
      "type":""
   },
   "genre":"female",
   "dni":"",
   "birthdate":"",
   "legalTutor":"",
   "emails":[
      {
         "emailUrl":"martasll@gmail.com",
         "emailDescription": "home"
      }
   ],
   "address":[
      {
         "name": "home",
         "streetAddress": "C. Leopoldo Morante", 
         "cityAddress": "Málaga",
         "stateProvinceAddress":"Málaga",
         "postcodeAddress": "29010",
         "countryAddress": "Spain"
      }
   ],
   "phones":[
      {
         "name": "mobile",
         "telNum": "+34722303012"
      }
   ],
   "social":[
      {
         "socialNetwork": "Youtube",
         "socialUser": "martasll"
      }
   ],
   "contactHistory":[
      {
         "date":"",
         "type": "phoneCall", 
         "durationMinutes": 15,
         "topic":"Info about math",
         "notes": "Information to send by email",
         "readed": true,
         "answered": true,
         "followAction":[{
            "user": "63567fe83121d48aad8d157e",
            "action": "email",
            "date": "2022-12-29T14:07:04.000+00:00",
            "reminder": -24,
            "result":"",
            "done":true,
         }]
      },
      {
         "date":"2022-12-29T14:08:04.000+00:00",
         "type": "email",
         "durationMinutes": 0,
         "topic":"Sending info of Maths",
         "notes": "Information send by email",
         "readed": false,
         "answered": false,
         "followAction":[{
            "user": "63567fe83121d48aad8d157e",
            "action": "phoneCall",
            "date": "2023-01-10T10:07:04.000+00:00",
            "reminder": -24, 
            "result":"",
            "done":false
         }]
      }
   ],
   "inboundInterface" :{
      "type": "Lead",
      "process" : "Info Sent",
      "firstContact": new Date("10/10/20"),
      "lastContact":new Date("10/10/22"),
   }
}

export const newStudent =
{
   "firstname" : "Eduardo",
   "lastname" : "Martin Garante",
   "type": "Student",
   "picture":{
      "fileName":"",
      "file":"",
      "type":""
   },
   "genre":"male",
   "dni":"",
   "birthdate":"1999-10-11T00:00:00.000+00:00",
   "legalTutor":"",
   "emails":[
      {
         "emailUrl":"eduedumargar@gmail.com",
         "emailDescription": "home"
      }
   ],
   "address":[
      {
         "name": "home",
         "streetAddress": "c. Formentera 54 2ºn 3a",
         "cityAddress": "Barcelona",
         "stateProvinceAddress":"Barcelona",
         "postcodeAddress": "08080",
         "countryAddress": "Spain"
      }
   ],
   "phones":[
      {
         "name": "mobile",
         "telNum": "+34722303012"
      }
   ],
   "social":[
      {
         "socialNetwork": "Facebook",
         "socialUser": "eduedumargar"
      }
   ],
   "contactHistory":[
      {
         "date":"",
         "type": "phoneCall",
         "durationMinutes": 15,
         "topic":"Info about math",
         "notes": "Information to send by email",
         "readed": true,
         "answered": true,
         "followAction":[{
            "user": "63567fe83121d48aad8d157e",
            "action": "email",
            "date": "2022-12-29T14:07:04.000+00:00",
            "reminder": -24,
            "result":"",
            "done":true
         }]
      },
      {
         "date":"2022-12-29T14:08:04.000+00:00",
         "type": "email",
         "durationMinutes": 0,
         "topic":"Sending info of Maths",
         "notes": "Information send by email",
         "readed": false,
         "answered":false,
         "followAction":[{
            "user": "63567fe83121d48aad8d157e",
            "action": "phoneCall",
            "date": "2023-01-10T10:07:04.000+00:00",
            "reminder": -24,
            "result":"",
            "done":false
         }]
      }
   ],
   "studentInterface" :{
      "subjects": [
         {
            "id": "635e55daa7bea9ef6ee7d470",
            "name": "Maths",
            "code": "PG1",
            "period":"22-23",
            "grades":[]
         }
      ],
      "payments": {
         "timing": "monthly",
         "remaining":[
            {
               "date": "2023-01-01T10:07:04.000+00:00",
               "concept": "December Payment",
               "amount":200,
               "box":"a",
               "from": "self",
               "to": "School Account"
            },
            {
               "date": "2023-02-01T10:07:04.000+00:00",
               "concept": "January Payment",
               "amount":200,
               "box":"a",
               "from": "self",
               "to": "School Account"
            },
            {
               "date": "2023-03-01T10:07:04.000+00:00",
               "concept": "February Payment",
               "amount":200,
               "box":"a",
               "from": "self",
               "to": "School Account"
            }
         ],
         "done":[
             {
               "date": "2022-12-01T10:07:04.000+00:00",
               "concept": "November Payment",
               "amount":200,
               "box":"a",
               "from": "self",
               "to": "School Account"
            },
            {
               "date": "2022-11-01T10:07:04.000+00:00",
               "concept": "October Payment",
               "amount":200,
               "box":"a",
               "from": "self",
               "to": "School Account"
            },
            {
               "date": "2022-09-01T10:07:04.000+00:00",
               "concept": "Reservation",
               "amount":200,
               "box":"a",
               "from": "self",
               "to": "School Account"
            }
         ]
      }
   }
}

export const newTeacher = 
{
   "firstname" : "Ana Maria",
   "lastname" : "Johnson",
   "type": "Teacher",
   "picture":{
      "fileName":"",
      "file":"",
      "type":""
   },
   "genre":"female",
   "dni":"",
   "birthdate":"1980-03-18T00:00:00.000+00:00",
   "legalTutor":"",
   "emails":[
      {
         "emailUrl":"anamjo@gmail.com",
         "emailDescription": "home"
      }
   ],
   "address":[],
   "phones":[
      {
         "name": "mobile",
         "telNum": "+34722303012"
      }
   ],
   "social":[
      {
         "socialNetwork": "Twitter",
         "socialUser": "anamjo"
      }
   ],
   "contactHistory":[],
   "staffInterface" :{
      "occupation": "Teacher",
      "endOfContract": "2023-06-01T10:07:04.000+00:00",
      "priceXHour": 20,
      "payments": {
         "timing": "yearly",
         "remaining":[
            {
               "date": "2023-06-01T10:07:04.000+00:00",
               "concept": "YearPayment",
               "amount":1320,
               "box":"a",
               "from": "School Account",
               "to": "self"
            }
         ],
         "done":[]
      },
      "blackFlagCal":[
      {
         "date":"2023-04-08T10:07:04.000+00:00"
      },
      {
         "date":"2023-06-02T10:07:04.000+00:00"
      }
      ],
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
}

export const newOfficeStaff = 
{
   "firstname" : "Pedro Pablo",
   "lastname" : "Rodante",
   "type": "Staff",
   "picture":{
      "fileName":"",
      "file":"",
      "type":""
   },
   "genre":"male",
   "dni":"",
   "birthdate":"1984-02-11T00:00:00.000+00:00",
   "legalTutor":"",
   "emails":[
      {
         "emailUrl":"peparo@gmail.com",
         "emailDescription": "home"
      }
   ],
   "address":[],
   "phones":[
      {
         "name": "mobile",
         "telNum": "+34722303012"
      }
   ],
   "social":[
      {
         "socialNetwork": "Reddit",
         "socialUser": "peparo"
      }
   ],
   "contactHistory":[],
   "staffInterface" :{
      "occupation": "OfficeAdmin",
      "endOfContract": "2024-06-01T10:07:04.000+00:00",
      "priceXHour": 11,
      "payments": {
         "timing": "monthly",
         "remaining":[
            {
               "date": "2023-06-01T10:07:04.000+00:00",
               "concept": "YearPayment",
               "amount":1320,
               "box":"a",
               "from": "School Account",
               "to": "self"
            }
         ],
         "done":[]
      },
      "blackFlagCal":[
      {
         "date":"2023-02-08T11:07:04.000+00:00"
      },
      {
         "date":"2023-12-01T10:07:04.000+00:00"
      }
      ],
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
}