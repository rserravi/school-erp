
import React from 'react';

//ICONS

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TagIcon from '@mui/icons-material/Tag';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


// material-ui
import { Box } from '@mui/material/index';
import {  Button, Card, CardActions, CardContent, CardHeader, Chip, Collapse, Grid, IconButton, Paper, Stack, Typography } from '@mui/material/index';
import { styled } from '@mui/styles/index';



// ==============================|| MESSAGES GRID ||============================== //

const MessagesGrid = (props) => {
    const [contactHistoryData, setContactHistoryData] = React.useState(props.contactHistory)
    const [expanded, setExpanded] = React.useState(false);
    var boxHeight = 300;

    //STYLED COMPONENTS

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const TypoSelf = styled(Typography)({
        color:'darkslategry',
        
    })

    const TypoUser = styled(Typography)({
        color:'red',
        textalign: 'right',
    })

    const CardActionRight = styled(CardActions)({
        display: "flex",
        justifyContent: "flex-end",
    })


    const AutoTypo = (props)=>{
        console.log("PROPS EN AUTOTYPO", props)
        const {item, variant, sender} = props
        console.log(item, variant, sender)
        return (
            <>
                {sender==="self"?
                    <TypoSelf variant={variant} component={variant}>
                        {item}
                    </TypoSelf>
                    :
                    <TypoUser variant={variant} component={variant} align="right">
                        {item}
                     </TypoUser>
                }
            </>
        )
    }

    const HeaderIcon = (props) =>{
        const {type, duration} = props;
        switch (type) {
            case "phoneCall":
                return( 
                    <><LocalPhoneIcon /> {duration}.m </>
                    )
            case "email":
                return( <EmailIcon />)
            case "whatsapp":
                return( <WhatsAppIcon />)
            case "social":
                return( <TagIcon />)
            case "inPerson":
                    return( <><AccessibilityIcon /> {duration}.m</>)
        
            default:
                return( <DeviceUnknownIcon />)
        } 
    }

    // MAIN CARD


    const MessagesCard = ()=>{
        return(
            <>
                {contactHistoryData?
                    contactHistoryData.map((item)=>{
                        return(
                            <>
                            <Card variant="outlined" sx={{mt:1, mr:1, border:2}}>
                                <CardHeader
                                    avatar={
                                        <HeaderIcon type={item.type} duration={item.durationMinutes}/>
                                    }
                                    action={
                                    <Stack direction="row" spacing={1} sx={{ml:2}}>
                                        {item.from==="self"?<Chip label={item.readed?"Readed":"Not Readed"} size="small" variant={item.readed?"contained":"outlined"} />:<></>}
                                        {item.from==="self"?<Chip label={item.answered?"Answered":"Not Answered"}  size="small" variant={item.answered?"contained":"outlined"}/>:<></>}
                                   </Stack>
                                    }
                                    title={item.topic}
                                    titleTypographyProps={{align:item.from==="self"?"left":"right"}}
                                    subheader={"Date: "+ new Date(item.date).toLocaleDateString("es-ES") + ", at :"+ new Date(item.date).toLocaleTimeString("es-ES")}
                                    subheaderTypographyProps={{align:item.from==="self"?"left":"right"}}
                                    sx={{backgroundColor:item.from==="self"?"linen":"lightpink"}}
                                    
                                />
                                <CardActionRight disableSpacing >    
                                    <ExpandMore
                                        expand={expanded}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                        >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActionRight>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                    <AutoTypo item={item.duration} variant="p" sender={item.from}/>
                                    <AutoTypo item={item.notes} variant="p" sender={item.from}/>
                                    
                                    </CardContent> 
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, border:1, borderColor:'grey.500',m:1 }}>
                                        testing box
                                    </Box>
                                    <Button size="small" color="primary" variant="outlined" startIcon={<ReplyIcon />}>
                                            Reply
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined">
                                            Add Action
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined">
                                            Edit Action
                                        </Button>
                                        <Button size="small" color="primary" variant="outlined">
                                            Delete Action
                                        </Button>
                                </Collapse>
                            </Card>
                
                            </>
                        )
                    })
                :<></>
                }
            </>
        )
    }

    // MAIN RETURN
     
    return (
    <>
      <Paper sx={{p:1, mt:1}}>
        <Box
          sx={{
            height: boxHeight,
            overflow: "hidden",
            overflowY: "scroll",
            width: '100%',
            '& .sender-self': {
              backgroundColor: 'rosybrown',
              color: 'white',
              fontWeight: '600',
            },
            '& .sender-user': {
              backgroundColor: 'khaki',
              color: 'dimgray',
              fontWeight: '600',
            },
          }}>
            <Grid container  direction="row" justifyContent="flex-start" alignItems="center" sx={{mt:1}}>
                <Grid item>
                    <Typography variant = "h4" component="h4">Messages</Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ml:2}}>
                        Add Message
                    </Button>
                </Grid>
            </Grid>
           
            <MessagesCard />

        </Box>
    </Paper>

    </>
    )
    };

export default MessagesGrid;
