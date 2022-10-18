// Takes the info from 'menu-items/horizontal-menu-items'
// If you add another menu, 
// 1) add an item to 'menu-items/horizontal-menu-items'
// 2) add also a "case" to "swith case" to find it
// 3) call it like  <HorizontalNav type="school" /> from your page


// material-ui
import { Button, ButtonGroup } from '@mui/material/index';


// project import
import  {peopleMenu, studentsMenu}  from 'menu-items/horitzontal-menu-items';
import { staffMenu } from 'menu-items/horitzontal-menu-items';
import { schoolMenu } from 'menu-items/horitzontal-menu-items';
import { activeSubItem } from 'store/reducers/menu';
import { errorMenu } from 'menu-items/horitzontal-menu-items';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from '../../../../node_modules/@mui/material/index';

// ==============================|| HORITZONTAL NAVIGATION ||============================== //


const HorizontalNav = (type) => {
    const dispatch = useDispatch();
    const menu = useSelector((state) => state.menu);
    const { openSubItem } = menu;
    let navigate = useNavigate();

    var menuItem =[]

    switch (type.type) {
        case "students":
            menuItem = studentsMenu;
            break;
        case "staff":
            menuItem = staffMenu;
            break;
        case "school":
            menuItem = schoolMenu;
            break;
        case "people":
            menuItem = peopleMenu;
            break;
        default:
            menuItem = errorMenu;
            break;
    }

    //var actualPage = type.type;
    const title = menuItem.title;
    const handleClick=(event, item)=>{
        
    
        console.log(item.id)
        dispatch(activeSubItem({ openSubItem: [item.id] }));
        navigate(item.url);
        
    
    }
    
    const HorNavGroup = (item)=>{

    let itemTarget = '_self';
    if (item.item.target) {
        itemTarget = '_blank';
    }
        
        return (
            <>
                {openSubItem==item.item.id? 
                    <Button 
                       
                        variant="contained" onClick={(e)=>{handleClick(e, item.item)}} >{item.item.title}</Button>
                    : 
                    <Button
                       
                        onClick={(e)=>{handleClick(e, item.item)}} >{item.item.title}</Button>}
            </>
        )
    
    }
    
    const horGrup = menuItem.children.map((item) => {

            return (
                <HorNavGroup key={item.id} item={item} />
                
            )
           
        });

    return (
        <>
        <Grid container alignItems="flex-end">
            <Grid item>
                <Typography variant="h3" component="h2" sx={{mr:2}}>{title}</Typography>
            </Grid>
            <Grid item>
                <ButtonGroup sx={{ pt: 2 }}>{horGrup}</ButtonGroup>
            </Grid>
        </Grid>
        </>
    )
};

export default HorizontalNav;
