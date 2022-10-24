
export class Phone {
    phoneNumber="";
    description="mobile"
    valid = true;
    constructor(phoneNumber, description){
        this.phoneNumber = phoneNumber;
        this.description = description;
        this.valid = this.checkNumber();
    }

    checkNumber () {
        return true;
    }

    getInternationalPrefix () {
        return "+34"
    }
}

export class Email {
    emailUrl = "";
    description = "";
    valid = "";
    constructor(emailUrl, description){
        this.emailUrl = emailUrl;
        this.description = description;
        this.valid = this.checkEmail();
    }

    checkEmail () {
        return true;
    }

    sendEmail (subject, message) {
        return true;
    }
}

export class Address {
    houseNumber = "";
    streetAddress = "";
    city = "";
    state = "";
    zipCode ="";
    country="";

    constructor(houseNumber, streetAddress, city, state, zipCode, country){
        this.houseNumber = houseNumber;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.country = country;
    }

    findAdress (){
        return "";
    }
}

export class Social {
    socialNetwork = "";
    user = "";
    link = "";

    constructor (socialNetwork, user){
        this.socialNetwork = socialNetwork;
        this.user = user;
        this.findLink();
    }

    findLink (){
        this.link = "";
    }
}

export class Person {
    id= "";
    firstname="";
    lastname="";
    image = "";
    birthdate= "";
    legalTutor=[];
    genre = "";
    dni = "";
    phone = [];
    email = [];
    address = [];
    social = [];

        
    constructor (id, firstname, lastname, image, birthdate, legalTutor, genre, dni, phone, email, address, social){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.birthdate = birthdate;
        this.legalTutor = legalTutor;
        this.genre = genre;
        this.dni=dni;
        this.phone = phone;
        this.email = email;
        this.address= address;
        this.social = social;
    
    }

    get fullName() {
        return this.firstname + " " + this.lastname;
    }

    addPhoneNumber(number, description){
        this.phone.push( new Phone(number, description));
    }

    addEmail(email, description){
        this.email.push( new Email(email, description));
    }
    addAddress(houseNumber, streetAddress, city, state, zipCode, country){
        this.address.push( new Address(houseNumber,streetAddress, city, state, zipCode, country));
    }

    addSocial(socialNetwork, user){
        this.social.push( new Social(socialNetwork, user))
    }

    // return days to birthday (negative numbers) or days past birthday (positive)
    // 0 means the date is birthday
    checkBirthDate(date){
        return 0
    }

    getAge (){
        return 20
    }
    
    getImageCapture (){
        this.image = "";
    }

    loadImage (){
        this.image = "";
    }

    checkDNI(dni){
        return true;
    }

}

const Occupation = {
    Teacher: "teacher",
    Admin: "admin",
    Other: "other"
}

const PaymentTiming = {
    Occasion: "occasion",
    Weekly: "weekly",
    Monthly: "monthly",
    Yearly: "yearly"

}

export class Staff extends Person {
    constructor (id, firstname, lastname, image, birthdate, legalTutor, genre, dni, phone, email, address, social, occupation, endOfContract, paymentTiming, paymentsRemaining, paymentsDone, weekAvailability, blackFlagCal, events, paymentDetails){
        super(id, firstname, lastname, image, birthdate, legalTutor, genre, dni, phone, email, address, social)
        this.occupation = occupation;
        this.endOfContract = endOfContract;
        this.paymentTiming = paymentTiming;
        this.paymentsRemaining = paymentsRemaining;
        this.paymentsDone = paymentsDone;
        this.weekAvailability = weekAvailability;
        this.blackFlagCal = blackFlagCal;
        this.events = events;
        this.paymentDetails = paymentDetails;
    }

    getYearlyCost(date){
        return 0.0;
    }

    getMonthlyCost(date){
        return 0.0;
    }

    getWeeklyCost(date){
        return 0.0;
    }

    getAgenda(){
        return {};
    }

    setPayment(date, amount, concept){
        return true;

    }

    checkAvailability(date){
        return true;
    }

    consolidatePayments(){
        return true;
    }

    createRemainingPayments(){
        return true;
    }
   
}

export class Student extends Person{
    constructor(id, firstname, lastname, image, birthdate, legalTutor, genre, dni, phone, email, address, social, bundleCourse, subjects, grades, paymentsRemaining, paymentsDone, events, paymentDetails){
        super(id, firstname, lastname, image, birthdate, legalTutor, genre, dni, phone, email, address, social);
        this.bundleCourse = bundleCourse;
        this.subjects = subjects;
        this.grades = grades;
        this.paymentsRemaining = paymentsRemaining;
        this.paymentsDone = paymentsDone;
        this.events = events;
        this.paymentDetails = paymentDetails;
    }

    getSessions(){
        return {}
    }

    getGrades(){
        return {}
    }

    getYearlyRevenue(date){
        return 0.0;
    }

    getMonthlyRevenue(date){
        return 0.0;
    }

    getWeeklyRevenue(date){
        return 0.0;
    }

    getAgenda(){
        return {};
    }

    setPayment(date, amount, concept){
        return true;

    }

    checkAvailability(date){
        return true;
    }

    consolidatePayments(){
        return true;
    }

    createRemainingPayments(){
        return true;
    }
   
}