import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import ProfileWrapper from "pages/authentication/ProfileWrapper";
import { profileCompletness } from "utils/profileChecker";
import CircularProgressWithLabel from 'pages/components-overview/CircularProgressWithLabel';
import UserForm from "components/forms/userform-comp";
import CompanyForm from "components/forms/companyform-comp";


// ================================|| LOGIN ||================================ //

const NoComplete = () => {
    const activeUser = useSelector(state => state.user)
    
    var user = activeUser.loggedUser
    var isCompleted = user.isCompleted
    const [profileComplete, setProfileComplete] = useState(profileCompletness(user))

    useEffect(()=>{
       
        console.log("PROFILE COMPLETE EN USEEFFECT", profileComplete)

    },[profileComplete, user])

    return(
    <ProfileWrapper>
         <Grid container spacing={3} sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>   
            <Grid item>
                <CircularProgressWithLabel value={profileComplete} />
            </Grid>
            <Grid item xs={12}>
                <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3" sx={{mb:10}}>Complete your profile to continue</Typography>        
                </Stack>
            </Grid>
            </Grid>
        {isCompleted===0?<UserForm />:<CompanyForm />}
    </ProfileWrapper>
    );
    }

export default NoComplete;
