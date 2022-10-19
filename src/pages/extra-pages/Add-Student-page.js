//import { Typography } from '@mui/material';
import { Avatar, Box, Button, Container, FormControlLabel, Grid, TextField, Link, Checkbox, Typography, Chip, Paper } from '@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import PropTypes from 'prop-types'; 


// project import
import { NameForm } from 'components/forms/name-comp';
import { ImageForm } from 'components/forms/image-comp';
import { PhoneForm } from 'components/forms/phone-comp';
import { EmailForm } from 'components/forms/email-comp';
import { AddressForm } from 'components/forms/address-comp';
import { SocialForm } from 'components/forms/social-comp';
import { CssDivider } from 'components/forms/overrideCSS';
import HorizontalNav from 'layout/MainLayout/HorizontalMenu/Horizontal-Menu';

// ==============================|| ADD STUDENT PAGE ||============================== //

const Menu = () =>{
    return(
    <>
        <HorizontalNav type="students" />
    </>
    )
}

const theme = createTheme();

const AddStudent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    const handleChange = (key, value) =>{
        console.log("KEY", key, "VALUE", value)
        
    }
    
    
    return(   
    <>
        <Menu />
        <Container component="main" maxWidth="ls">

             <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ mt:3}}

             >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <PersonAddAltOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add New Student
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <CssDivider textAlign="left" sx={{ mt:2}}>
                    <Chip label="MAIN DETAILS" />
                </CssDivider>
                <Paper sx={{p:2, mt:1, mb:2}}>
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={10} md={10}>
                        <NameForm handleChange={handleChange} />
                    </Grid>

                    <Grid item xs={12} sm={2} md={2}>
                        <ImageForm handleChange={handleChange} />
                    </Grid>
                </Grid>
                </Paper>
                
                <CssDivider textAlign="left">
                    <Chip label="CONTACT " />
                </CssDivider>
                <Paper sx={{p:2, mt:1, mb:2}}>
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={6} md={6}>
                        <PhoneForm handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <EmailForm handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <AddressForm handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <SocialForm handleChange={handleChange} />
                    </Grid>
                </Grid>
                </Paper>
                
               
            </Box>

        </Container>
       
    </>
    )
};

AddStudent.prototype = {
    handleChange: PropTypes.func
}

export default AddStudent;
