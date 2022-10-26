// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <CompanyNameForm handleChange={handleChange, user} />   //
//      "handleChange" of parent will obtain KEY and VALUE      //
//      "user" retrieves user data for filling and defaults     //
//                                                              //
//==============================================================//

import React from "react";

// MUI AND MUI-X IMPORTS
import { Box, Grid, TextField } from "../../../node_modules/@mui/material/index";

// ==============================|| COMPANY NAME FORM COMPONENT ||============================== //


export const CompanyNameForm = ({handleChange, user}) =>{
  
    const handleChangeName = (event) => {
       handleChange("name", event.target.value);
    
      };
    const handleWebsite= (event) => {
        handleChange("website",event.target.value);

      };

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
                <Grid container justifyContent="flex-start" alignItems="flex-start"> 
                    <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            >

                        <Grid item xs={12} sm={5.5} md={5.5} sx={{ mr:1}} >
                            <TextField
                            id="name"
                            name='name'
                            label="Company Name"
                            helperText="Enter the Company/School/Academy official name"
                            variant="standard"
                            onChange={handleChangeName}
                            defaultValue = {user.name}
                            fullWidth
                            focused
                            required
                            sx = {{mr:2}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5.5} md={5.5} sx={{mr:1}} >
                            <TextField
                            id="website"
                            name="website"
                            label="Company WebSite"
                            helperText="Enter your public website"
                            variant="standard"
                            onChange={handleWebsite}
                            defaultValue = {user.website}
                            fullWidth
                            focused
                            sx = {{mr:2}}
                            required
                            />
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Box> 
        </React.Fragment>
    )
}