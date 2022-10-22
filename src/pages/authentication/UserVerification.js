import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import { Button } from "@mui/material/index";
// project import
import AuthWrapper from "pages/authentication/AuthWrapper";
import { userRegistrationVerification } from "api/userApi";
import { Alert } from "@mui/material/index";

// ================================|| USER VERIFICATION ||================================ //

const UserVerification = () => {

    const {id, email} = useParams();
    const data ={
        randomUrl: id,
        email: email
    }
    const [registered, setRegistered] = useState("")

    useEffect(()=>{
        userRegistrationVerification(data)
        .then((data)=>{
            setRegistered(data)
        })
        .catch((error)=>{
            setRegistered(data)
        })
    },[])
   

    return (
        <AuthWrapper>
            <Grid container spacing={3} sx={{display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>   
                
                <Grid item xs={12}>
                    <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        {registered.status==="success"?<Alert>Success</Alert>:<Alert severity="error">Error</Alert>}
                        {registered.status==="success"?<Typography variant="h3">{registered.message}</Typography>:<Typography variant="h3">Incorrect Url. Check your email and follow the link.</Typography>}
                    </Stack>
                </Grid>
                
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item><Button href="/login">Login</Button></Grid>
                    </Grid>
                        
                </Grid>
            </Grid>
        </AuthWrapper>
    )
};

export default UserVerification;
