import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// material-ui
import { Grid } from '@mui/material';
import { Button } from "@mui/material/index";
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';

// project import
import { profileCompletness } from "utils/profileChecker";

import AnimateButton from "components/@extended/AnimateButton";

import { dispatch } from "store/index";
import { setLoading, setUser } from "store/reducers/userSlice";

import { UserUpdate } from "api/userApi";
import { Stack, Typography } from "../../../node_modules/@mui/material/index";



// ================================|| LOGIN ||================================ //

const CongratulationsForm = ({increaseStep}) => {
    const activeUser = useSelector(state => state.user)
    var user = activeUser.loggedUser
    var company = activeUser.loggedUser.company
    const [profileComplete, setProfileComplet] = useState(profileCompletness(user))

    useEffect(()=>{
       
        //console.log("PROFILE COMPLETE EN USEEFFECT", profileComplete)

    },[profileComplete, user])

    const SubmitButton = async (event) =>{
        dispatch(setLoading())
        user ={...user, company:company, isCompleted:3}
        console.log(user)
        dispatch(setUser(user))
       
        //CREATING INITIAL DATA

        await UserUpdate(user)
            .then((data)=>{
                if(data.status==="success"){
                    console.log("UPDATE USER CORRECT",data.message)
                    increaseStep();
                }
                else {
                    console.log("ERROR AT UPDATE USER",data.message)
                }

            })
            .catch((error)=>{
                console.log("ERROR AT UPDATE USER",error)
            })

        dispatch(setLoading())

    }

    return(
    <React.Fragment>
        <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Stack direction ="row" alignItems ="center" sx={{mb:5}}>
            <ThumbUpTwoToneIcon fontSize="large"/><Typography variant="h3" sx={{ml:4}}>Congratulations!</Typography> 
            </Stack>
            <Typography variant="h4" sx={{mb:2}}>You have finished your starting configuration.</Typography>
            <Typography variant="p">We have created some starting data for you.</Typography>
            <Typography variant="p">All your initial steps are complete. You can change any data later.</Typography>              
            <Typography variant="p" sx={{mt:1}}>In the next screen, familiarize with the program and change the fake data</Typography>              
            <Grid container spacing={3} sx={{display: 'flex',
                flexDirection: 'column',
                }}>   
            <Grid item xs={12} sx={{mt:2}}>
            <AnimateButton>
                <Button
                    disableElevation
                    fullWidth
                    size="large"
                    variant="contained"
                    color="primary"
                    sx = {{mt:2}}
                    onClick={SubmitButton}
                >
                    Start School ERP
                </Button>
            </AnimateButton>
            </Grid>
            </Grid>
        </Stack>
    </React.Fragment>
    );
    }

export default CongratulationsForm;
