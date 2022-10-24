import React, { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, useMediaQuery } from '@mui/material';

// project import
import Drawer from './Drawer';
import Header from './Header';
import navigation from 'menu-items';
import Breadcrumbs from 'components/@extended/Breadcrumbs';

// types
import { openDrawer } from 'store/reducers/menuSlice';
import { loginSuccess } from 'store/reducers/loginSlice';
import { fetchNewAccessJWT } from 'api/userApi';
import { getUserProfile } from 'store/actions/userAction';
import NoAuth from 'pages/system/noAuth';
import NoVerified from 'pages/system/noVerified';
import NoComplete from 'pages/system/noComplete';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    const theme = useTheme();
    const matchDownLG = useMediaQuery(theme.breakpoints.down('xl'));
    const dispatch = useDispatch();    

    const { drawerOpen } = useSelector((state) => state.menu);
    const {isAuth} = useSelector(state => state.login)
    const {isCompleted, isVerified} = useSelector(state =>state.user.loggedUser)
    var firstLoad = true;


    // drawer toggler
    const [open, setOpen] = useState(drawerOpen);
    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch(openDrawer({ drawerOpen: !open }));
    };

    // set media wise responsive drawer
    useEffect(() => {
        setOpen(!matchDownLG);
        dispatch(openDrawer({ drawerOpen: !matchDownLG }));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matchDownLG]);

    useEffect(() => {
        if (open !== drawerOpen) setOpen(drawerOpen);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [drawerOpen]);

    useEffect(()=>{
        console.log(firstLoad)
        if (firstLoad){
            console.log ("Use Effect 3")
            const udpdateAccessJWT = async() =>{
                const result = await fetchNewAccessJWT();
                console.log ("FETCH NEW ACCESS", result)
                result && dispatch(loginSuccess());
                result && dispatch (getUserProfile());
            };
            udpdateAccessJWT();
            const store = sessionStorage.getItem("accessJWT")
            console.log("SESSION STORE", store)
            store && dispatch(loginSuccess());
            store && dispatch (getUserProfile());
            firstLoad = false;
        }
    },[dispatch, firstLoad])


    return (
    <React.Fragment>
        {isAuth?(
            isVerified?(
                isCompleted>80?(
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <Header open={open} handleDrawerToggle={handleDrawerToggle} />
                    <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
                    <Box component="main" sx={{ width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                        <Toolbar />
                        <Breadcrumbs navigation={navigation} title titleBottom card={false} divider={false} />
                        <Outlet />
                    </Box>
                </Box>
                ):(<NoComplete />)
            ):(<NoVerified />)): //??? USAR NAVIGATE POR SEGURIDAD???
        (<NoAuth />)
        }
        
    </React.Fragment>
     )
    
};

export default MainLayout;
