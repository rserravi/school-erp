// material-ui
//import { Typography } from '@mui/material';
import React from 'react';
import HorizontalNav from 'layout/MainLayout/HorizontalMenu/Horizontal-Menu';
import { GettAllInbound } from 'api/schoolApi';
import { useSelector } from 'react-redux';

// project import


//ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchIcon from '@mui/icons-material/Search';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SchoolIcon from '@mui/icons-material/School';


import { Avatar, Box, InputAdornment, Paper, TextField, Tooltip } from '../../../node_modules/@mui/material/index';
import { GridActionsCellItem } from '../../../node_modules/@mui/x-data-grid/components/cell/GridActionsCellItem';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { RenderEmailCell } from 'components/grids/EmailCels';
import { RenderPhoneCell } from 'components/grids/PhoneCells';
import { RenderMessageCells } from 'components/grids/MessagesCells';
import { PersonCard } from 'components/forms/personCard';

//import MainCard from 'components/MainCard';

// ==============================|| PEOPLE PAGE ||============================== //

const People = () => {
    const [peopleData, setPeopleData] = React.useState([])
    const [peopleDataOriginal, setPeopleDataOriginal] = React.useState([])
    const [firstLoad, setFirstLoad]= React.useState(true);
    const activeUser = useSelector(state => state.user)
    const [selectedItem, setSelectedItem] = React.useState([]);
    var company = activeUser.loggedUser.company
    var boxHeight = 400;

    React.useEffect(()=>{
        // console.log("EN USE EFFECT CUSTOMER CONENTE")
         if (firstLoad){
         GettAllInbound(company.mongoDataBase).then((data)=>{
          //console.log("DATA RESULT",data.result);
           //console.log(data.result[0].inboundInterface.type)
           setPeopleData(data.result);
           setPeopleDataOriginal(data.result)
           setFirstLoad(false);
       }
       ).catch((error)=>{
         console.log(error)
       })}
       },[firstLoad, company.mongoDataBase])

    const setPersonActive = (id) =>{
        const result = peopleData.filter((item)=>item._id === id)
        console.log("RESULTADO DE SETPEOPLEACTIVE", result, "EN ARRAY ", peopleData)
        setSelectedItem(result)
    }

    const handleSearchChange = (event) =>{
      event.preventDefault();
      console.log(event.target.value)
      const newArray = peopleDataOriginal.filter(item => item.firstname.includes(event.target.value) || item.lastname.includes(event.target.value))
      console.log(newArray)
      setPeopleData(newArray);
    }

    const getInbound =(row)=>{

        if (row.inboundInterface){
            return row.inboundInterface.type
        }
        else{
            return ""
        }
        
    }

    const getInboundProcess =(row)=>{

        if (row.inboundInterface){
            return row.inboundInterface.process
        }
        else{
            return ""
        }
        
    }

    const rows = peopleData.map((row) => 
       (
         {
           id: row._id, 
           picture: row.picture.file,
           firstname: row.firstname, 
           lastname: row.lastname,
           messages: row.contactHistory,
           email: row.emails[0].emailUrl,
           phone: row.phones[0].telNum,
           type: getInbound(row),
           inboundProcess: getInboundProcess(row)
         }
       )
     );
    
    const Columns = () => {
  
        return(
          [
            { field: 'id', headerName: "Id", width: 20, hide:"true" },
            { field: 'type', headerName: "Inbound", width: 80 },
          
            { field: 'picture', headerName:"Image", width:60, renderCell: (params)=>
                {
                  return(
                    <>
                      <Avatar src={params.value.includes("data:image/jpeg;base64")?params.value:"./images/" + params.value} />
                    </>
                  )
                }
            },
            { field: 'firstname', headerName: "First Name", width: 100, align: "right",headerAlign:"right" },
            { field: 'lastname', headerName: "Last Name", width: 150},
            { field: 'inboundProcess', headerName: "State", width: 100 },
            { field: 'messages', headerName: "Messages", width: 80, renderCell:(params)=>RenderMessageCells(params)},
            { field: 'email', headerName:"Email", width: 183, renderCell:(params)=>RenderEmailCell(params)},
            { field: 'phone', headerName: "Phone", width: 190, renderCell:(params)=>RenderPhoneCell(params)},
            {
              field: 'actions',
              type: 'actions',
              headerName: "",
              width: 100,
              sortable: false,
              getActions: (params) => [
                <GridActionsCellItem
                icon={<Tooltip title="See Person"><VisibilityIcon /></Tooltip>}
                label="See Person"
                onClick={(event) => {
                  setPersonActive(params.id);
                  event.stopPropagation();
              }}
              />,
              <GridActionsCellItem
                icon={<Tooltip title="Enroll as student"><SchoolIcon /></Tooltip>}
                label="Enroll"
               
              />,
              
              <GridActionsCellItem
                icon={<PersonSearchIcon />}
                label="OSINT"
                showInMenu
              />,
              <GridActionsCellItem
                icon={<ContentCopyIcon />}
                label="Duplicate Person"
                showInMenu
              />,
              <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete Person"
                  showInMenu
                />,
                <GridActionsCellItem
                icon={<LocalPrintshopIcon />}
                label="Print Data"
                showInMenu
              />,
              ],
            },
          ]
        )
      } 

    return (
    <>
    <HorizontalNav type="people" />
    <TextField
        id="searchField"
        label="Seach People"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        sx = {{mt:2}}
        onChange = {handleSearchChange}
      />
     <Paper sx={{mt:2}}>
    <Box
          sx={{
            height: boxHeight,
            width: '100%',
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
            '& .name-bold': {
              fontWeight: '600',
            },
            '& .debt': {
              fontWeight: '600',
              backgroundColor: 'red',
              color: 'white'
            },
            
          }}>
    <DataGrid
        rows={rows}
        columns={Columns()}
        rowsPerPageOptions={[5,10,25,50,100]}
        rowsPerPage ={10}
        getCellClassName={(params) => {
            if (params.field === 'type') {
              switch (params.value) {
                case "Unknown":
                  return 'inbound-unknown';
                case "Lead":
                  return 'inbound-lead';
                case "Customer":
                  return 'inbound-customer';
                case "Passive":
                  return 'inbound-passive';
              
                default:
                  return 'inbound-unknown';
              }
            }
            if (params.field === 'firstname' || params.field ==='lastname'){
                return 'name-bold'
              }
            if(params.field === 'debts'){
              const paramNum = params.value.split("€")
              if (Number(paramNum[0]) !==0)
                return 'debt'
              }
            return "";
            
          }}
      />
    </Box>
    </Paper>

    {activeUser!==null?<PersonCard person={selectedItem}/>:<></>}

    </>
    )
    };

export default People;
