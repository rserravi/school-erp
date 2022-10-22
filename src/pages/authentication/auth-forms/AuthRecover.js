import React, { useState } from 'react';
//import { useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';


// material-ui
import {
    Button,
    Box,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Alert
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { dispatch } from 'store/index';


// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { passwordCreator } from 'utils/password-strength';
import { CheckRecoverPin } from 'api/userApi';
import { recoverError, recoverSuccess } from 'store/reducers/recoverSlice';




// ============================|| RECOVER PASSWORD ||============================ //

const AuthRecover = () => {

    //const navigation = useNavigate();
    const recoverStore = useSelector(state => state.recover)
    const [generatedPass, setGeneratedPass] = useState(passwordCreator(20))
    const [level, setLevel] = useState();
    const {pin, email} = useParams();

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };


    return (
        <>
            <Formik
                initialValues={{
                    password: generatedPass,                }}
                validationSchema={Yup.object().shape({
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        
                        setStatus({ success: false });
                        setSubmitting(false);
                        const frmData = {
                            email: email,
                            pin: pin,
                            newPassword: values.password
                        }
                        await CheckRecoverPin(frmData)
                        .then((value)=>{
                            console.log("VALOR",value.message)
                            if (value.status==="error"){
                                dispatch(recoverError(value.message));
                            }else{
                            dispatch(recoverSuccess(value.message))
                            }
                        })
                        .catch((err)=>{
                            console.log("ERROR",err)
                            dispatch(recoverError(err.message));
                        })
                                              
                    } catch (err) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);

                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                        <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-signup">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="password-signup"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            handleChange(e);
                                            changePassword(e.target.value);
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="******"
                                        inputProps={{}}
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="helper-text-password-signup">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                                <FormControl fullWidth sx={{ mt: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Grid>

                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Submit New Password
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={12}>
                                {recoverStore.status==="error"?<Alert severity="error">{recoverStore.message}</Alert>:<></>}
                                {recoverStore.status==="success"?<Alert severity="success">{recoverStore.message}</Alert>:<></>}
                              
                            </Grid>
                            <Grid item xs={12}>
                                {recoverStore.status!=="success"?<Typography variant="p">Use auto-generated password or create your own.</Typography>:<Button variant="contained" href="/login">LOGIN</Button>} 
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthRecover;
