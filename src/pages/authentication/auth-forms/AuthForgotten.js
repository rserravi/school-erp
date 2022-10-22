import React from 'react';
//import { useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';

// material-ui
import {
    Button,
    FormHelperText,
    Grid,
    InputLabel,
    OutlinedInput,
    Stack
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { RecoverPassword } from 'api/userApi';
import { Alert } from '../../../../node_modules/@mui/material/index';
import { dispatch } from 'store/index';
import { recoverError, recoverPending, recoverSuccess } from 'store/reducers/recoverSlice';

// assets



// ============================|| FIREBASE - LOGIN ||============================ //

const AuthForgotten = () => {

    //const navigation = useNavigate();
    const recoverStore = useSelector(state => state.recover)

    return (
        <>
            <Formik
                initialValues={{
                    email: ''                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        
                        setStatus({ success: false });
                        setSubmitting(false);
                        dispatch(recoverPending());
                        RecoverPassword(values)
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
                                    <InputLabel htmlFor="email-recover">Email Address</InputLabel>
                                    <OutlinedInput
                                        id="email-recover"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter email address"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
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
                                        Send New Password
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item xs={12}>
                                {recoverStore.status==="error"?<Alert severity="error">{recoverStore.message}</Alert>:<></>}
                                {recoverStore.status==="success"?<Alert severity="success">{recoverStore.message}</Alert>:<></>}
                              
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthForgotten;
