import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// material-ui
import { Grid } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material/index";

// project import
import { NameForm } from "components/forms/name-comp";
import { profileCompletness } from "utils/profileChecker";
import { PhoneForm } from "components/forms/phone-comp";
import { ImageForm } from "components/forms/image-comp";
import { EmailForm } from "components/forms/email-comp";
import { AddressForm } from "components/forms/address-comp";
import { SocialForm } from "components/forms/social-comp";

import { dispatch } from "store/index";
import { setUser } from "store/reducers/userSlice";
import AnimateButton from "components/@extended/AnimateButton";
import { UserUpdate } from "api/userApi";
import { CompanyNameForm } from "./companyName-comp ";
import randomGenerator from "utils/randomGenerator";


// ================================|| LOGIN ||================================ //

const CompanyForm = () => {
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
        company = {...company, "mongoDataBase":company.name+randomGenerator(5)}
        user ={...user, company:company, isCompleted:2}
        console.log(user)
        dispatch(setUser(user))
        setDialogOpen(false);

        await UserUpdate(user)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("UPDATE USER CORRECT",data.message)
                }
                else {
                    console.log("ERROR AT UPDATE USER",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT UPDATE USER",error)
            })

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
