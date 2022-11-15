import React from "react";
import { useSelector } from "react-redux";

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import ProfileWrapper from "pages/authentication/ProfileWrapper";
import UserForm from "components/forms/userform-comp";
import CompanyForm from "components/forms/companyform-comp";
import { Backdrop, CircularProgress, Step, StepLabel, Stepper } from "../../../node_modules/@mui/material/index";
import CongratulationsForm from "components/forms/congratulations-form";


// ================================|| LOGIN ||================================ //

const NoComplete = () => {
    const activeUser = useSelector(state => state.user)
    
    var user = activeUser.loggedUser
    var isCompleted = user.isCompleted

    const steps = [
        'Complete your user profile',
        'Complete company profile',
        'Creating some fake initial data',
      ];
    const [activeStep, setActiveStep] = React.useState(isCompleted);

    const increaseStep = ()=>{
        setActiveStep(activeStep+1);
    }

    return(
    <ProfileWrapper>
         <Grid container spacing={3} sx={{display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',}}>   
            <Grid item sx={{mb:4}}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            </Grid>
            {activeStep===0 ? (
                <React.Fragment>
                    <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3" sx={{mb:10}}>Complete your user profile to continue</Typography>        
                    </Stack>
                    <UserForm increaseStep={increaseStep} />
                </React.Fragment>
            
            ):activeStep===1? (
                <React.Fragment>
                    <Stack direction="column" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3" sx={{mb:10}}>Complete your company profile to continue</Typography>        
                    </Stack>
                    <CompanyForm increaseStep={increaseStep} />
                </React.Fragment>
               ):
               //ACTIVE STEP 3
               (
                <React.Fragment>
                    <CongratulationsForm increaseStep={increaseStep} />
                </React.Fragment>
               )
            }
        </Grid>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={activeUser.isLoading}
            >
            <CircularProgress color="inherit" />
        </Backdrop>
    </ProfileWrapper>
    );
    }

export default NoComplete;
