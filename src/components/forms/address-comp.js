// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <AddressForm handleChange={handleChange} />                //
//      "handleChange" of parent will obtain KEY and VALUE      //
//                                                              //
//==============================================================//

import React, { useEffect } from "react";
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from "../../../node_modules/@mui/material/index";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { countries } from "utils/validation-utils";
import { CssMenuItem, CssTextField } from "./overrideCSS";
export const AddressForm = ({handleChange}) =>{
    


    const emailArray = [
        {
            "id":0,
            "name": "Home",
            "streetAddress": "",
            "cityAddress":"",
            "stateProvinceAddress":"",
            "postcodeAddress":"",
            "countryAddress":"",
            
        }

    ];

    const [address, setAddress] = React.useState(emailArray);

    const ListItems = address.map((element, index)=>{
        
        const handleChangeStreetAddress=(event)=>{
            setAddress(
                address.map(item => 
                    item.id === index ? 
                    {...item, "streetAddress": event.target.value }
                    : item
                )
            )
        }

        const handleChangeCityAddress=(event)=>{
            setAddress(
                address.map(item => 
                    item.id === index ? 
                    {...item, "cityAddress": event.target.value }
                    : item
                )
            )
        }

        const handleChangeStateAddress=(event)=>{
            setAddress(
                address.map(item => 
                    item.id === index ? 
                    {...item, "stateProvinceAddress": event.target.value }
                    : item
                )
            )
        }


        const handleChangePostCodeAddress=(event)=>{
            setAddress(
                address.map(item => 
                    item.id === index ? 
                    {...item, "postcodeAddress": event.target.value }
                    : item
                )
            )
        }

        const handleChangeCountryAddress=(event)=>{
            setAddress(
                address.map(item => 
                    item.id === index ? 
                    {...item, "countryAddress": event.target.value }
                    : item
                )
            )
            console.log("ON CHANGE",  event.target.value, event.target.inputValue)
        }

        const handleChangeName=(event)=>{

            setAddress(
                address.map(item => 
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
                        <InputLabel id="addressType">Address Type</InputLabel>
                            <Select
                                labelId="addressType"
                                id="addressType"
                                onChange={handleChangeName}
                                label="addressType"
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
                        placeholder="Enter street number and street"
                        value = {element.streetAddress}
                        onChange={handleChangeStreetAddress}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{mt:1}} >
                    <CssTextField
                        placeholder="Enter city"
                        value = {element.cityAddress}
                        onChange={handleChangeCityAddress}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{mt:1}} >
                    <CssTextField
                        placeholder="Enter state / province / region"
                        value = {element.stateProvinceAddress}
                        onChange={handleChangeStateAddress}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{mt:1}} >
                    <CssTextField
                        placeholder="Enter a postcode / ZIP"
                        value = {element.postcodeAddress}
                        onChange={handleChangePostCodeAddress}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} sx={{mt:1}} >
                    <CssTextField
                        id ="countrySelect"
                        placeholder="Enter a Country"
                        select
                        value = {element.countryAddress}
                        onChange={handleChangeCountryAddress}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    >
                    {countries.map((option)=>{
                        return(
                        <CssMenuItem key={option.code} value={option.label} dense>
                            {option.label}
                        </CssMenuItem>
                        )
                    })}
                    </CssTextField>
                </Grid>
               
                </Paper> 
            </React.Fragment>
        )
    })


    const HandleAddNew = (event) =>{
        const newEmail ={
            "id": address.length,
            "name": "Other",
            "streetAddress": "",
            "cityAddress":"",
            "stateProvinceAddress":"",
            "postcodeAddress":"",
            "countryAddress":"",
        }
        setAddress([...address, newEmail]) //Spread op or will not re-render
        
    }

    useEffect(() => {
        handleChange("address", address);

    },[address, handleChange]); 
    
    return (
        <React.Fragment>
            <Typography sx={{mt:2}}>
                Address
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
                    <HomeRoundedIcon />
                </IconButton>
                    <Button onClick={HandleAddNew}>Add New</Button>
                </Box>
           </Paper>
  
           </Grid>
        </React.Fragment>
    )
}