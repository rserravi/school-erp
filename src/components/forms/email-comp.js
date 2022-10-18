// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <EmailForm handleChange={handleChange} />                //
//      "handleChange" of parent will obtain KEY and VALUE      //
//                                                              //
//==============================================================//

import React, { useEffect } from "react";
import { Alert, Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from "../../../node_modules/@mui/material/index";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { isValidEmail } from "utils/validation-utils";
import { CssTextField } from "./overrideCSS";
export const EmailForm = ({handleChange}) =>{
    


    const emailArray = [
        {
            "id":0,
            "name": "Home",
            "emailAddress": ""
        }

    ];

    const [emails, setEmails] = React.useState(emailArray);

    const ListItems = emails.map((element, index)=>{
        
        const handleChangeEmail=(event)=>{
            setEmails(
                emails.map(item => 
                    item.id === index ? 
                    {...item, "emailAddress": event.target.value }
                    : item
                )
            )
        }

        const handleChangeName=(event)=>{

            // This will not RERENDER.

            /* let temp = phones;
            temp[index].name = event.target.value;
            setPhones(temp); */

            // Mapping, on the other hand, will rerender the useState

            setEmails(
                emails.map(item => 
                    item.id === index ? 
                    {...item, "name": event.target.value }
                    : item
                )
            )
            
        }

        return(
            <React.Fragment key={index}>

               <Paper sx={{mr:1, mt:1, p:1}} key={index}>
                <Grid item xs={12} sm={12} md={12} sx={{mt:2, mr:1}} >
                <FormControl variant="standard" fullWidth sx={{  minWidth: 120 } }>
                        <InputLabel id="emailName">Email Type</InputLabel>
                            <Select
                                labelId="emailName"
                                id="emailName"
                                onChange={handleChangeName}
                                label="emailName"
                                value = {element.name}
                                                       
                                >
                                <MenuItem value={"Home"}>Home</MenuItem>
                                <MenuItem value={"Work"}>Work</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                            </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{mt:2}} >
                    <CssTextField
                        placeholder="Enter a valid email address"
                        value = {element.emailAddress}
                        onChange={handleChangeEmail}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    />
                </Grid>
                {isValidEmail(element.emailAddress) ? <Alert severity="success">Valid Email</Alert>: <Alert severity="error">Not a Valid Email</Alert>}
                </Paper> 
            </React.Fragment>
        )
    })


    const HandleAddNew = (event) =>{
        const newEmail ={
            "id": emails.length,
            "name": "Other",
            "emailAddress": ""
        }
        setEmails([...emails, newEmail]) //Spread op or will not re-render
        
    }

    useEffect(() => {
        handleChange("emails", emails);

    },[emails, handleChange]); 
    
    return (
        <React.Fragment>
            <Typography sx={{mt:2}}>
                Emails
            </Typography>
            <Grid container justifyContent="flex-start" alignItems="flex-start"> 
   
           {ListItems}
           <Paper sx={{mr:1, mt:1, p:1}}>
                <Box  
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        '& > :not(style)': {
                          p: 1,
                        },
                      }}
                >  
                <IconButton aria-label="call" color="primary" onClick={HandleAddNew}>
                    <EmailRoundedIcon />
                </IconButton>
                    <Button onClick={HandleAddNew}>Add New</Button>
                </Box>
           </Paper>
  
           </Grid>
        </React.Fragment>
    )
}