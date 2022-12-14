import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - landingpage
const LandingPage = Loadable(lazy(() => import('landing/landing-page')));

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));
const UserVerification = Loadable(lazy(() => import('pages/authentication/UserVerification')));
const ForgottenPass = Loadable(lazy(() => import('pages/authentication/ForgottenPass')));
const RecoverPass = Loadable(lazy(()=> import( 'pages/authentication/Recovery')));
const TestClasses = Loadable(lazy(()=> import( 'pages/system/testClasses')));
const NoAuth = Loadable(lazy(()=> import( 'pages/system/noAuth')));
const NoVerified = Loadable(lazy(()=> import( 'pages/system/noVerified')));


// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: 'login',
            element: <AuthLogin />
        },
        {
            path: 'register',
            element: <AuthRegister />
        },
        {
            path: 'forgotten-password',
            element: <ForgottenPass />
        },
        {
            path: 'test-classes',
            element: <TestClasses />
        },
        {
            path: 'noAuthorized',
            element: <NoAuth />
        },
        {
            path: 'noVerified',
            element: <NoVerified />
        },
        {
            path: 'verification',
            children: [
                {
                    path: ':id/:email',
                    element: <UserVerification />
                },
            ]
        },
        {   
            path: 'recovery',
            children:[
                {
                    path: ':pin/:email',
                    element: <RecoverPass />
                },
            ]
        }
    ]
};

export default LoginRoutes;
