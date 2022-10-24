import React from "react";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import { Button } from "@mui/material/index";

// project import
import AuthWrapper from "pages/authentication/AuthWrapper";
import { Avatar } from "@mui/material/index";
import { PersonAddOutlined } from "@mui/icons-material/index";
import { NameForm } from "components/forms/name-comp";

// ================================|| LOGIN ||================================ //

const NoComplete = () => {

    const handleChange = (key, value) =>{
        console.log("KEY", key, "VALUE", value)
        
    }

    return(
    <AuthWrapper>
        <Grid container spacing={3} sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>   
            <Grid item>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PersonAddOutlined />
                </Avatar>
            </Grid>
            <Grid item xs={12}>
                <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Complete your profile to continue</Typography>        
                </Stack>
            </Grid>
            
            <Grid item xs={12}>
                <Grid container spacing={3}>
                <Grid item xs={12} sm={10} md={10}>
                        <NameForm handleChange={handleChange} />
                    </Grid>
                </Grid>
                    
            </Grid>
        </Grid>
    </AuthWrapper>
    );
    }

export default NoComplete;
