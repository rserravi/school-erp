import React, { useEffect, useState } from "react";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from "pages/authentication/AuthWrapper";
import { User } from "classes/userClass";




// ================================|| LOGIN ||================================ //

const TestClasses = () => {
    const [usuario,setUsuario] = useState(new User("", "rserravi@gmail.com", "pantera0"))
    const [refresh, setRefresh] = useState("")

    useEffect(()=>{

        setRefresh(usuario.refreshJWT)

    },[usuario]) 
   

    return(
    <AuthWrapper>
        <Grid container spacing={3} sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>   
            
            <Grid item xs={12}>
                <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">TestClasses</Typography>        
                </Stack>
            </Grid>
            
            <Grid item xs={12}>
                <Grid container sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>
                    <Grid item>

                       <strong>Completeness =</strong> {usuario.completnessPercent()}
                      
                    </Grid>
                    <Grid item>
                       <strong> Name:</strong>  {usuario.fullName}
                    </Grid>

                </Grid>
                    
            </Grid>
        </Grid>
    </AuthWrapper>
)};

export default TestClasses;
