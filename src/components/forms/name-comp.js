// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <NameForm handleChange={handleChange} />                //
//      "handleChange" of parent will obtain KEY and VALUE      //
//                                                              //
//==============================================================//

import React from "react";

// MUI AND MUI-X IMPORTS
import { Alert, Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "../../../node_modules/@mui/material/index";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getAge } from "utils/time-utils";
import { validateDNI } from "utils/validation-utils";

// ==============================|| NAME FORM COMPONENT ||============================== //


export const NameForm = ({handleChange}) =>{

    const [age, setAge] = React.useState(0);
    const [validatedDNI, setValidatedDNI]= React.useState(false);
    const [dateVal, setDateVal] = React.useState(Date.now());
    const [genderVal, setGenderVal] = React.useState("none");

    const handleChangeName = (event) => {
       handleChange("firstname", event.target.value);
    
      };
    const handleChangeLastName= (event) => {
        handleChange("lastname",event.target.value);

      };
    const handleGender= (event) => {
        setGenderVal(event.target.value);
        handleChange("gender", event.target.value);
      };
    const handleBirthdate= (event) => {
        setDateVal(event._d)
        var newAge = getAge(event._d);
        console.log(newAge)
        setAge(newAge);
        
        handleChange("birthdate",event._d);
        
      };

    const handleChangeTutorName = (event) => {
        handleChange("tutor", event.target.value);
     
       };
    const handleChangeDNI = (event) => {
        setValidatedDNI(validateDNI(event.target.value));
        handleChange("DNI", event.target.value);
     
       };


    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
                <Grid container justifyContent="flex-start" alignItems="flex-start"> 
                    <Grid item xs={12} sm={5} md={5} sx={{mt:2, mr:1}} >
                        <TextField
                        id="firstname"
                        name='firstname'
                        label="Name"
                        helperText="Enter the name"
                        variant="standard"
                        onChange={handleChangeName}
                        fullWidth
                        focused
                        required
                        sx = {{mr:2}}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} sx={{mt:2, mr:1}} >
                        <TextField
                        id="lastname"
                        name="lastname"
                        label="Lastname"
                        helperText="Enter the last name"
                        variant="standard"
                        onChange={handleChangeLastName}
                        fullWidth
                        focused
                        sx = {{mr:2}}
                        required
                        />
                    </Grid>
               
                    <Grid item xs={9} sm={2} md={2} sx={{mt:2, mr:1}} >
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                            <DatePicker
                                label="Birthdate"
                                variant="standard"
                                sx = {{mr:2}}
                                value = {dateVal}
                                onChange={handleBirthdate}
                                renderInput={(params) => <TextField variant="standard" fullWidth sx = {{mr:2}} {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item  xs={3} sm={2} md={2} sx={{mt:2, mr:1, textAlign:"center"}}>
                        <p style={{display:"inline-block", textAlign:"center"}}>{age} years Old</p>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} sx={{mt:2, mr:1}} >
                        <FormControl variant="standard" fullWidth sx={{  minWidth: 120 } }>
                        <InputLabel id="gender">Gender</InputLabel>
                            <Select
                                labelId="gender"
                                id="gender"
                                onChange={handleGender}
                                label="Gender"
                                value = {genderVal}                            
                                >
                                <MenuItem value={"none"}>none</MenuItem>
                                <MenuItem value={"female"}>female</MenuItem>
                                <MenuItem value={"male"}>male</MenuItem>
                                <MenuItem value={"other"}>other</MenuItem>
                            </Select>
                            </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} sx={{mt:2, mr:1}} >
                        <TextField
                            id="dni"
                            name='dni'
                            label="DNI"
                            helperText="Enter a Valid DNI"
                            variant="standard"
                            onChange={handleChangeDNI}
                            fullWidth
                            focused
                            required
                            autoComplete='off'
                            sx = {{mr:2}}
                            />
                            
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} sx={{mt:2, mr:1}} >
                        {validatedDNI?<Alert severity='success'>Correct DNI</Alert>:<Alert severity='error'>Enter a valid Id</Alert>}
                    </Grid>
                    <Grid item xs={12} sm={5} md={5} sx={{mt:2, mr:1}} >
                        <TextField
                            id="tutor"
                            name='tutor'
                            label="Legal Tutor"
                            helperText="Enter the name of legal Tutor"
                            variant="standard"
                            onChange={handleChangeTutorName}
                            fullWidth
                            focused
                            required
                            autoComplete='off'
                            disabled = {(age>=18)}
                            sx = {{mr:2}}
                            />
                    </Grid>
                </Grid>
            </Box> 
        </React.Fragment>
    )
}