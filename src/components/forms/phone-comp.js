// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <PhoneForm handleChange={handleChange} />                //
//      "handleChange" of parent will obtain KEY and VALUE      //
//                                                              //
//==============================================================//

import React from "react";
import { Alert, Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from "../../../node_modules/@mui/material/index";
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber } from 'react-phone-number-input'

export const PhoneForm = ({handleChange, user})=>{
    
    const phoneArray = user.phones
        

    const [phones, setPhones] = React.useState(phoneArray);

    const ListItems = phones.map((element, index)=>{
        
        const handleChangeTel=(value)=>{
            setPhones(
                phones.map(item => 
                    item.id === index ? 
                    {...item, "telNum": value }
                    : item
                )
            )
            handleChange("phones", phones);
        }

        const handleChangeName=(event)=>{

            // This will not RERENDER.

            /* let temp = phones;
            temp[index].name = event.target.value;
            setPhones(temp); */

            // Mapping, on the other hand, will rerender the useState


            setPhones(
                phones.map(item => 
                    item.id === index ? 
                    {...item, "name": event.target.value }
                    : item
                )
            )
            handleChange("phones", phones);
            
        }

        return(
            <React.Fragment key={index}>

               <Paper sx={{mr:1, mt:1, p:1}} key={index}>
                <Grid item xs={12} sm={12} md={12} sx={{mt:2, mr:1}} >
                <FormControl variant="standard" fullWidth sx={{  minWidth: 120 } }>
                        <InputLabel id="telName">Phone Type</InputLabel>
                            <Select
                                labelId="telName"
                                id="telName"
                                onChange={handleChangeName}
                                label="telName"
                                value = {element.name}                            
                                >
                                <MenuItem value={"Mobile"}>Mobile</MenuItem>
                                <MenuItem value={"Home"}>Home</MenuItem>
                                <MenuItem value={"Work"}>Work</MenuItem>
                                <MenuItem value={"Whatsapp"}>Whatsapp</MenuItem>
                                <MenuItem value={"Fax"}>Fax</MenuItem>
                                <MenuItem value={"Other"}>Other</MenuItem>
                            </Select>
                            </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{mt:2, mr:4}} >
                    <PhoneInput
                        placeholder="Enter the phone number"
                        value = {element.telNum}
                        onChange={handleChangeTel}
                        autoComplete='off'
                    />
                </Grid>
                    { typeof element.telNum==="string"? 
                        isValidPhoneNumber(element.telNum) ? 
                            <Alert severity="success">Valid Phone</Alert>: 
                            <Alert severity="error">Not a Valid Phone</Alert>
                        :<Alert severity="error">Not a Valid Phone</Alert>
                    }
                </Paper> 
            </React.Fragment>
        )
    })


    const HandleAddNew = (event) =>{
        const newPhone ={
            "id": phones.length,
            "name": "Other",
            "telNum": ""
        }
        setPhones([...phones, newPhone]) //Spread op or will not re-render
        
    }
/* 
    useEffect(() => {
        handleChange("phones", phones);

    },[phones, handleChange]);  */
    
    return (
        <React.Fragment>
            <Typography sx={{mt:2}}>
                Phones
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
                    <AddIcCallRoundedIcon />
                </IconButton>
                    <Button onClick={HandleAddNew}>Add New</Button>
                </Box>
           </Paper>
  
           </Grid>
        </React.Fragment>
    )
}