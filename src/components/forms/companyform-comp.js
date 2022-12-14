import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// material-ui
import { Grid } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material/index";

// project import
import { profileCompletness } from "utils/profileChecker";
import { PhoneForm } from "components/forms/phone-comp";
import { ImageForm } from "components/forms/image-comp";
import { EmailForm } from "components/forms/email-comp";
import { AddressForm } from "components/forms/address-comp";
import { SocialForm } from "components/forms/social-comp";
import AnimateButton from "components/@extended/AnimateButton";

import { dispatch } from "store/index";
import { setLoading, setUser } from "store/reducers/userSlice";

import { UserUpdate } from "api/userApi";
import { CompanyNameForm } from "./companyName-comp ";
import randomGenerator from "utils/randomGenerator";
import { CreateClassroom, CreateEquipment, CreatePerson, CreateSubject } from "api/schoolApi";
import { newEquipment, newClassroom, newSubject, newLead, newStudent, newTeacher, newOfficeStaff } from "api/initialData";


// ================================|| LOGIN ||================================ //

const CompanyForm = ({increaseStep}) => {
    const activeUser = useSelector(state => state.user)
    var user = activeUser.loggedUser
    var company = activeUser.loggedUser.company
    const [profileComplete, setProfileComplet] = useState(profileCompletness(user))
    const [dialogOpen, setDialogOpen] = React.useState(false);
    
    const handleClickDialogOpen = () => {
        setDialogOpen(true);
      };
    
      const handleDialogClose = () => {
        setDialogOpen(false);
      };

    const handleChange = (key, value) =>{
        console.log("KEY", key, "VALUE", value)
        company ={...company, [key]:value}
        user = {...user, "company": company}
        dispatch(setUser(user));
        setProfileComplet(profileCompletness(user))
        console.log(user, profileComplete)
    }

    useEffect(()=>{
       
        //console.log("PROFILE COMPLETE EN USEEFFECT", profileComplete)

    },[profileComplete, user])

    const SubmitButton = async (event) =>{
        dispatch(setLoading())
        var mongoDataBase = "";
        if (!company.mongoDataBase || company.mongoDataBase===""){
            mongoDataBase = company.name+randomGenerator(5);
            company = {...company, "mongoDataBase":mongoDataBase}
        }else{
            mongoDataBase = company.mongoDataBase

        }
        user ={...user, company:company, isCompleted:2}
        console.log(user)
        dispatch(setUser(user))
        setDialogOpen(false);

        //CREATING INITIAL DATA

        await UserUpdate(user)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("UPDATE USER CORRECT",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT UPDATE USER",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT UPDATE USER",error)
            })

           
        await CreateEquipment(newEquipment, mongoDataBase )
            .then((data)=>{
                if(data.status==="success"){
                    console.log("EQUIPMENT CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE EQUIPMENT",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE EQUIPMENT",error)
            })
        
        await CreateClassroom(newClassroom, mongoDataBase)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("CLASSROOM CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE CLASSROOM",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE CLASSROOM",error)
            })

        await CreateSubject(newSubject, mongoDataBase)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("SUBJECT CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE SUBJECT",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE SUBJECT",error)
            })

        await CreatePerson(newLead, mongoDataBase)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("LEAD CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE LEAD",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE LEAD",error)
            })
        
        await CreatePerson(newStudent, mongoDataBase)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("STUDENT CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE STUDENT",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE STUDENT",error)
            })

        await CreatePerson(newTeacher, mongoDataBase)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("TEACHER CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE TEACHER",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE TEACHER",error)
            })
        
        await CreatePerson(newOfficeStaff, mongoDataBase)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("OFFICE STAFF CREATED",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT CREATE OFFICE STAFF",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT CREATE OFFICE STAFF",error)
            })

        dispatch(setLoading())

    }

    return(
    <React.Fragment>
        <Grid container spacing={3} sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>   
            
           <Grid item xs={12}>  {/* MAIN FORM FIELD */}
                <Grid container>
                    <Grid container>  {/* FIRST ROW, NAME AND IMAGE*/}
                        <Grid item xs={12} sm={9} md={9}>
                            <CompanyNameForm handleChange={handleChange} user={company}/>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3}>
                            <ImageForm handleChange={handleChange} user={company}/>
                        </Grid>
                    </Grid>
                
                    <Grid item xs={12} sm={10} md={10}>
                            <PhoneForm handleChange={handleChange} user={company}/>
                    </Grid>
                    <Grid item xs={12} sm={10} md={10}>
                            <EmailForm handleChange={handleChange} user={company}/>
                    </Grid>
                    <Grid item xs={12} sm={10} md={10}>
                            <AddressForm handleChange={handleChange} user={company}/>
                    </Grid>
                    <Grid item xs={12} sm={10} md={10}>
                            <SocialForm handleChange={handleChange} user={company}/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                fullWidth
                                size="large"
                                variant="contained"
                                color="primary"
                                onClick={handleClickDialogOpen}
                            >
                                Send Company Profile
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid> 
            </Grid>
        </Grid>
        <Dialog
            open={dialogOpen}
            onClose={handleDialogClose}
            aria-labelledby="alert-dialog-continue"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {profileComplete===100?<>Congratulations! {profileComplete}% complete</>:<>Some parts missing: {profileComplete}% complete</>}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    
                    <>You can continue {profileComplete<100?<> and finish later or keep editing</>:<></>}</>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleDialogClose}>
                    Keep Editing
                </Button>
                <Button onClick={SubmitButton} autoFocus>
                    Continue
                </Button>
            </DialogActions>
        </Dialog>
    </React.Fragment>
    );
    }

export default CompanyForm;
