//import { Typography } from '@mui/material';
import { Avatar, Box, Button, Container, FormControlLabel, Grid, TextField, Link, Checkbox, Typography } from '../../../node_modules/@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import PropTypes from 'prop-types'; 


// project import
import { NameForm } from 'components/forms/name-comp';
import { ImageForm } from 'components/forms/image-comp';
import { PhoneForm } from 'components/forms/phone-comp';

// ==============================|| ADD STUDENT PAGE ||============================== //

const Menu = () =>{
    return(
    <>
    <Stack direction="row" spacing={2}>
        <Button href="/students">Main</Button>
        <Button variant="outlined">Add Student</Button>
        <Button href="/students/see-students">See Students</Button>
        <Button href="/students/grades">Grades</Button>
    </Stack>
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
                    Add Student
                </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={10} md={10}>
                        <NameForm handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={2} md={2}>
                        <ImageForm handleChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <PhoneForm handleChange={handleChange} />
                    </Grid>
                </Grid>
               
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                        />
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Send
                        </Button>
              
            <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
                </Grid>
            </Box>
       

        </Container>
       
    </>
    )
};

AddStudent.prototype = {
    handleChange: PropTypes.func
}

export default AddStudent;
