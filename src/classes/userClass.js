import { fetchUser, userLogin } from "api/userApi";
import { Email, Person } from "./humans";

export class User extends Person {
    id= "";
    firstname="";
    lastname="";
    image = "";
    birthdate= "";
    genre = "";
    dni = "";
    phone = [];
    email = [];
    address = [];
    social = [];
    logged = false;
    company = [];
    isVerified = false;
    password = "";
    randomUrl = "";
    accessJWT = "";
    refreshJWT = "";


    constructor (id, email, rawPassword){

        super(id, "", "", "", "", "", "", "", "", new Email(email,"work"))
        if (!id && email && rawPassword) {
            this.logIn (email, rawPassword)
        }
    
    }


    // LOGIN METHOD. Creates refresh (mongo) and Auth (redis)
    logIn = (email, pass)=>{
        console.log("Haciendo Login")
        const frmData = {
            email: email,
            password: pass
        }
       userLogin(frmData)
        .then((data)=>{
            //console.log(data.message);
            this.accessJWT = data.accessJWT;
            this.refreshJWT = data.refreshJWT;
            this.logged = true;
            fetchUser()
            .then((data)=>{
               //console.log(data.user)
                this.firstname = data.user.firstname
                this.lastname = data.user.lastname
                this.id =data.user._id
                this.company = data.user.company
                this.isVerified = data.user.isVerified
                this.password = data.user.password
                this.randomUrl = data.user.randomURL
                console.log(this.toString())
                return {status: "success"}

            }).catch((err)=>{
                console.log(err)
                return err.message

            })
            
        }).catch((err)=>{
            console.log(err)
            this.logged = false;
            return err.message
        })
        
    }

    completnessPercent = () =>{
        let percent = 0;
        //if (this.id) {percent +=5}
        if (this.firstname) {percent +=5}
        if (this.lastname) {percent +=5}
        if (this.bithdate) {percent +=5}
        if (this.genre) {percent +=5} 
        if (this.dni) {percent +=5}
        if (this.phone) {percent +=5}
        if (this.email) {percent +=5}
        if (this.address) {percent +=5}
        if (this.social) {percent +=5}
        if (this.company) {percent +=5}
        if (this.isVerified) {percent +=5}
        if (this.password) {percent +=5}

        return percent
           
    }

      
    toString = () =>{
        return {
            completedProfile: this.completnessPercent(),
            id : this.id,
            name : this.fullName,
            birthdate : this.birthdate.toString(),
            genre : this.genre,
            dni: this.dni,
            phone: this.phone.toString(),
            email: this.email.toString(),
            address: this.address.toString(),
            social: this.social.toString(),
            company: this.company.toString(),
            isVerified: this.isVerified,
            isLogged: this.logged,
            password: this.password,
            randomUrl: this.randomUrl,
            auth: this.accessJWT,
            refresh: this.refreshJWT,
        }
    }
}