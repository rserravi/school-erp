import React from "react";
import { Link } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';
// project import
import AuthWrapper from "pages/authentication/AuthWrapper";
import AuthForgotten from "./auth-forms/AuthForgotten";


// ================================|| USER VERIFICATION ||================================ //

const ForgottenPass = () => (
    <AuthWrapper>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                    <Typography variant="h3">Recover Password</Typography>
                    <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don&apos;t have an account?
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <AuthForgotten />
            </Grid>
        </Grid>
    </AuthWrapper>
);

export default ForgottenPass;
