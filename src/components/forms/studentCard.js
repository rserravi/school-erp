
import MessagesGrid from "components/grids/MessageGrid";
import PaymentsGrid from "components/grids/PaymentsGrid";
import SubjectsGrid from "components/grids/SubjectsGrid";
import React from "react";
import { daysToDate, getAge, localDate } from "utils/time-utils";

// MUI AND MUI-X IMPORTS
import { Box, Grid, Link, Paper,Typography } from "../../../node_modules/@mui/material/index";


// ==============================|| STUDENT CARD COMPONENT ||============================== //


export const StudentCard = ({student}) =>{
    //console.log("STUDENT en STUDENTCARD",student);
    const activeStudent = student[0];
    var under = require("underscore.string");

  
    if (!activeStudent) {
        return(<></>)
    }


    const Debts = ()=>{
        const today = new Date()
        var debt = 0;
        if (!activeStudent) {
            //console.log("NO ACTIVE STUDENT")
            return(<>NO STUDENT</>)
        } else 
        {
           
            //console.log("CHECKING DEBTS")
            const toPay = activeStudent.studentInterface.payments[0].remaining
            toPay.forEach(item => {
                const payDate = new Date(item.date)
               // console.log("PAYDATE", payDate, "TODAY", today)
                if (payDate > today){
                    debt += item.amount
                }

              //  console.log ("DEUDA ACTUAL", debt)
            })
        }
        return (
            <>
                <Box sx={{
                    width: '100%',
                    '& .withdebts': {
                    color: 'red',
                    fontWeight: '600',
                    },
                }}
                >
                  <p className={debt>0?"withdebts":""}>Debts o missed payments :{debt}</p>
                </Box>
            </>
        )
    }

    const StudentHeader = ()=>{
        return(
            <>
                <Grid container justifyContent="flex-start" alignItems="baseline"> 
                 <Grid item xs={12} sm={6} md={6}>
                    <Typography variant="h3" component="h3">{activeStudent.firstname + " " +activeStudent.lastname + " (student)"} </Typography>        
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                    <Debts />
                  </Grid>
                </Grid>
            </>
        )
    }

    const LegalTutor = ()=>{
        return (
            <Grid item xs={12} sm={12} md={12}>
                <Typography variant="p" component="p">Legal Tutor : {activeStudent.LegalTutor} </Typography>
            </Grid>
        )
    }


    const EmailsCard = () =>{

        return(
            <>
            <Typography variant="p" component="p"><u>Emails:</u> </Typography>
            <ul>
                
            {activeStudent.emails.map((item)=>{
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
                
            {activeStudent.phones.map((item)=>{
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
                
            {activeStudent.social.map((item)=>{
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
                
            {activeStudent.address.map((item)=>{
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
        if (activeStudent.birthdate){
            return (
                <Typography variant="p" component="p"><strong>Birthdate :</strong> {localDate(activeStudent.birthdate)} <i>({daysToDate(activeStudent.birthdate)} days to next birthday)</i></Typography>
            )
        }
        else {
            return(
                <Typography variant="p" component="p"><strong>Birthdate :</strong> No data.</Typography>
            )
        }
    }


    const MainDetails = ()=>{
        const age = getAge(activeStudent.birthdate)
        return(
        <>
        <Grid container justifyContent="flex-start" alignItems="flex-start" sx={{mt:2}}> 
            <Grid item xs={12} sm={2} md={2}>
               <img src={activeStudent.picture.file?activeStudent.picture:"images/Portrait_Placeholder.png"} height={200} width={200} alt="Student"></img>
            </Grid>
            
            <Grid container xs={12} sm={10} md={10} sx={{pl:2}}>
                <Grid container xs={12} sm={6} md={6} sx={{pl:2}}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" component="p"><strong>DNI :</strong> {activeStudent.dni}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <BirhtDateText />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" component="p"><strong>Age : </strong>{age} </Typography>
                    </Grid>
                    {age<18?<LegalTutor />:<></>}
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography variant="p" component="p"><strong>Gender :</strong> {under.capitalize(activeStudent.genre)}  </Typography>
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
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
                <StudentHeader />
                <MainDetails />
                <Grid container justifyContent="flex-start" alignItems="flex-start">
                    <Grid item xs={12} sm={6} md={6}>
                        <SubjectsGrid subjects= {activeStudent.studentInterface.subjects} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <MessagesGrid contactHistory= {activeStudent.contactHistory} />
                    </Grid>
                </Grid>
              
                <PaymentsGrid payments = {activeStudent.studentInterface.payments} />
            </Box> 
            </Paper>
        </React.Fragment>
    )
}