import MessagesGrid from "components/grids/MessageGrid";
import React from "react";
import { daysToDate, getAge, localDate } from "utils/time-utils";

// MUI AND MUI-X IMPORTS
import { Box, Chip, Grid, Link, Paper,Stack,Typography } from "../../../node_modules/@mui/material/index";


// ==============================|| PERSON CARD COMPONENT ||============================== //


export const PersonCard = ({person}) =>{
    //console.log("STUDENT en STUDENTCARD",student);
    const activePerson = person[0];
    console.log(person);
    var under = require("underscore.string");

  
    if (!person || person.length===0) {
        return(<></>)
    }

    const getChipBackground=()=>{

            console.log("getChipBackground", activePerson.inboundInterface.type)
            switch (activePerson.inboundInterface.type) {
              case "Unknown":
                return 'rosybrown';
              case "Lead":
                return 'khaki';
              case "Customer":
                return 'dodgerblue';
              case "Passive":
                return 'darkred';
            
              default:
                return 'rosybrown';
            }
        
    }

    const getChipForegroundColor=()=>{

        switch (activePerson.inboundInterface.type) {
          case "Unknown":
            return 'white';
          case "Lead":
            return 'dimgray';
          case "Customer":
            return 'white';
          case "Passive":
            return 'white';
        
          default:
            return 'white';
        }
    
}

    const PersonHeader = ()=>{
        return(
            <>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width:'100%',        
                }}>
                
                <Typography variant="h3" component="h3">{activePerson.firstname + " " +activePerson.lastname } </Typography>
                    
            </Box>
            </>
        )
    }

    const PersonSubHeader = ()=>{
        return(
            <>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width:'100%',
                mt:1,        
                }}>
                <Grid container justifyContent="flex-start" alignItems="baseline"> 
                 <Grid item xs={12} sm={6} md={6}>
                 <Stack direction="row" spacing={2} alignItems="center">
                 <Typography variant="p" component="p"> Inbound:  </Typography>
                    <Chip label={activePerson.inboundInterface.type} sx={{backgroundColor:getChipBackground(), color:getChipForegroundColor()}} ></Chip>
                    <Typography variant="p" component="p">{"First Contact: " + new Date(activePerson.inboundInterface.firstContact).toLocaleDateString('es-ES')} </Typography>
                    <Typography variant="p" component="p">{"Last Contact: " + new Date(activePerson.inboundInterface.lastContact).toLocaleDateString('es-ES')} </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                  <Stack direction="row" spacing={2} alignItems="center">
                      
                        <Typography variant="h5" component="h5">Inbound State: {activePerson.inboundInterface.process } </Typography>        
                        
                    </Stack>
                  </Grid>

                </Grid>
            </Box>
            </>
        )
    }

    const EmailsCard = () =>{

        return(
            <>
            <Typography variant="p" component="p"><u>Emails:</u> </Typography>
            <ul>
                
            {activePerson.emails.map((item)=>{
                return(
                <>
                    <li key={item.id}>
                    <strong> {under.capitalize(item.emailDescription)}:</strong> <Link href={"mailto:"+item.emailUrl}>{item.emailUrl}</Link>
                    </li>
                </>
                )
            })}
            </ul>
            </>
        )
    }

    const PhonesCard = () =>{

        return(
            <>
            <Typography variant="p" component="p"><u>Phones:</u> </Typography>
            <ul>
                
            {activePerson.phones.map((item)=>{
                return(
                <>
                    <li key={item.id}>
                    <strong> {under.capitalize(item.name)}:</strong> <Link href={"tel:"+item.telNum}>{item.telNum}</Link>
                    </li>
                </>
                )
            })}
            </ul>
            </>
        )
    }

    const SocialCard = () =>{

        return(
            <>
            <Typography variant="p" component="p"><u>Social Network:</u> </Typography>
            <ul>
                
            {activePerson.social.map((item)=>{
                return(
                <>
                    <li key={item.id}>
                    <strong> {under.capitalize(item.socialNetwork)}:</strong> {item.socialUser}
                    </li>
                </>
                )
            })}
            </ul>
            </>
        )
    }

    const AddressCard = ()=>{
        return(
            <>
            <Typography variant="p" component="p"><u>Addresses:</u> </Typography>
                
            {activePerson.address.map((item)=>{
                return(
                <>
                    <strong key={item.id}> {under.capitalize(item.name)}:</strong> {item.streetAddress + ". "+ item.postcodeAddress + " " + item.cityAddress + ", " + item.stateProvinceAddress +". " + item.countryAddress}
                </>
                )
            })}
            </>
        )
    }

    const BirhtDateText = ()=>{
        if (activePerson.birthdate){
            return (
                <Typography variant="p" component="p"><strong>Birthdate :</strong> {localDate(activePerson.birthdate)} <i>({daysToDate(activePerson.birthdate)} days to next birthday)</i></Typography>
            )
        }
        else {
            return(
                <Typography variant="p" component="p"><strong>Birthdate :</strong> No data.</Typography>
            )
        }
    }


    const MainDetails = ()=>{
        const age = getAge(activePerson.birthdate)
        return(
        <>
        <Grid container justifyContent="flex-start" alignItems="flex-start" sx={{mt:2}}> 
            <Grid item xs={12} sm={2} md={2}>
               <img src={activePerson.picture.file?activePerson.picture:"images/Portrait_Placeholder.png"} height={200} width={200} alt="Person"></img>
            </Grid>
            
            <Grid container xs={12} sm={10} md={10} sx={{pl:2}}>
                <Grid container xs={12} sm={6} md={6} sx={{pl:2}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" component="p"><strong>DNI :</strong> {activePerson.dni}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                       <BirhtDateText />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" component="p"><strong>Age : </strong>{age} </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" component="p"><strong>Gender :</strong> {under.capitalize(activePerson.genre)}  </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <AddressCard />
                    </Grid>
                </Grid>
                <Grid container xs={12} sm={6} md={6} sx={{pl:2}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <EmailsCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <PhonesCard />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <SocialCard />
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
        </>
        )
    }



    return (
        <React.Fragment>
            <Paper sx={{mt:2, p:1}}>
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width:'100%',        
                '& .inbound-unknown': {
                    backgroundColor: 'rosybrown',
                    color: 'white',
                    fontWeight: '600',
                },
                '& .inbound-lead': {
                    backgroundColor: 'khaki',
                    color: 'dimgray',
                    fontWeight: '600',
                },
                '& .inbound-customer': {
                    backgroundColor: 'dodgerblue',
                    color: 'white',
                    fontWeight: '600',
                },
                '& .inbound-passive': {
                    backgroundColor: 'darkred',
                    color: 'white',
                    fontWeight: '600',
                },
                }}>
                <PersonHeader />
                <PersonSubHeader />
                <MainDetails />
                <MessagesGrid contactHistory= {activePerson.contactHistory} />
            </Box> 
            </Paper>
        </React.Fragment>
    )
}