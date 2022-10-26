// =======================|| USAGE ||===========================//
//                                                              //
//      From parent component:                                  //
//      <SocialForm handleChange={handleChange} />                //
//      "handleChange" of parent will obtain KEY and VALUE      //
//                                                              //
//==============================================================//

import React from "react";
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, Typography } from "../../../node_modules/@mui/material/index";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { CssTextField } from "./overrideCSS";
export const SocialForm = ({handleChange, user}) =>{
    

    const socialArray = user.social
        

    const [social, setSocial] = React.useState(socialArray);

    const ListItems = social.map((element, index)=>{
        
        const handleChangeSocialUser=(event)=>{
            setSocial(
                social.map(item => 
                    item.id === index ? 
                    {...item, "socialUser": event.target.value }
                    : item
                )
            )
            handleChange("social", social);
        }

        const handleChangeSocialNetwork=(event)=>{

            setSocial(
                social.map(item => 
                    item.id === index ? 
                    {...item, "socialNetwork": event.target.value }
                    : item
                )
            )
            handleChange("social", social);
            
        }

        return(
            <React.Fragment key={index}>

               <Paper sx={{mr:1, mt:1, p:1}} key={index}>
                <Grid item xs={12} sm={12} md={12} sx={{mt:2, mr:1}} >
                <FormControl variant="standard" fullWidth sx={{  minWidth: 120 } }>
                        <InputLabel id="socialocialNetwork">Email Type</InputLabel>
                            <Select
                                labelId="socialocialNetwork"
                                id="socialocialNetwork"
                                onChange={handleChangeSocialNetwork}
                                label="socialocialNetwork"
                                value = {element.socialNetwork}
                                                       
                                >
                                <MenuItem value={"Facebook"}>Facebook</MenuItem>
                                <MenuItem value={"Twitter"}>Twitter</MenuItem>
                                <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
                                <MenuItem value={"Instagram"}>Instagram</MenuItem>
                                <MenuItem value={"Pinterest"}>Pinterest</MenuItem>
                                <MenuItem value={"Youtube"}>Youtube</MenuItem>
                                <MenuItem value={"TikTok"}>TikTok</MenuItem>
                                <MenuItem value={"Snapchat"}>Snapchat</MenuItem>
                                <MenuItem value={"Medium"}>Medium</MenuItem>
                                <MenuItem value={"Twitch"}>Twitch</MenuItem>
                                <MenuItem value={"Reddit"}>Reddit</MenuItem>
                                <MenuItem value={"Discord"}>Discord</MenuItem> 
                                <MenuItem value={"Other"}>Other</MenuItem>

                            </Select>
                            </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={12} sx={{mt:2}} >
                    <CssTextField
                        placeholder={element.socialNetwork!==0?"Enter a social user for "+ element.socialNetwork: "Enter a social user"}
                        value = {element.socialUser}
                        onChange={handleChangeSocialUser}
                        autoComplete='off'
                        fullWidth
                        size="small"  
                    />
                </Grid>
                </Paper> 
            </React.Fragment>
        )
    })


    const HandleAddNew = (event) =>{
        const newSocial ={
            "id": social.length,
            "socialNetwork": "Other",
            "socialUser": ""
        }
        setSocial([...social, newSocial]) //Spread op or will not re-render
        
    }

/*     useEffect(() => {
        handleChange("social", social);

    },[social, handleChange]);  */
    
    return (
        <React.Fragment>
            <Typography sx={{mt:2}}>
                Social Networks
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