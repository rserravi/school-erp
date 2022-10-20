import React from "react";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import { Button } from "@mui/material/index";
import Image from 'mui-image'

// project import
import AuthWrapper from "pages/authentication/AuthWrapper";
import noAuthImage from "../../assets/images/noAuthorized.png"

// ================================|| LOGIN ||================================ //

const NoAuth = () => (
    <AuthWrapper>
        <Grid container spacing={3} sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>   
            <Grid item>
                <Image src={noAuthImage}></Image>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Register a new user or LogIn</Typography>        
                </Stack>
            </Grid>
            
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item><Button href="/register">Register</Button></Grid>
                    <Grid item><Button href="/login">Login</Button></Grid>
                </Grid>
                    
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default NoAuth;
