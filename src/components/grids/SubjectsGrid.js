
//import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

//ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';


// material-ui
import { Box, Tooltip } from '@mui/material/index';
import { GridActionsCellItem } from '@mui/x-data-grid/components/cell/GridActionsCellItem';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { IconButton, Paper, Typography } from '../../../node_modules/@mui/material/index';

// project import


// ==============================|| SUBJECTS GRID ||============================== //

const SubjectsGrid = (props) => {
    //console.log("SUBJECTS EN STUDENT GRID", props.subjects)
    const [subjectsData, setSubjectsData] = React.useState(props.subjects)
    var boxHeight = 300;


    const renderGrades =(row)=>{

        if (row.grades && row.grades.length >0){
            return (
                <>
                    <IconButton>
                        <VisibilityTwoToneIcon size="small"/>
                    </IconButton>
                </>
            )
        }
        else{
            return (
            <>
                <IconButton>
                    <CancelTwoToneIcon size="small"/>
                </IconButton>
            </>
            )
        }
        
    }

    const rows = subjectsData.map((row) => 
       (
         {
           id: row.id, 
           name: row.name,
           code: row.code, 
           period: row.period,
           messages: row.contactHistory,
           grades: row.grades,
         }
       )
     );
    
    const Columns = () => {
  
        return(
          [
            { field: 'code', headerName:"Code", width:60},
            { field: 'id', headerName: "Id", width: 20, hide:"true" },
            { field: 'name', headerName: "Subject", width: 300 },
          
            
            { field: 'period', headerName: "Period", width: 60},
           
            { field: 'grades', headerName: "Grades", width: 60, renderCell:(params)=>renderGrades(params)},
            {
              field: 'actions',
              type: 'actions',
              headerName: "",
              width: 80,
              sortable: false,
              getActions: (params) => [
                <GridActionsCellItem
                icon={<Tooltip title="See Subject"><VisibilityIcon /></Tooltip>}
                label="See Suject"
              />,
              
              <GridActionsCellItem
                icon={<ContentCopyIcon />}
                label="Duplicate Suject"
                showInMenu
              />,
              <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete Suject"
                  showInMenu
                />,
                <GridActionsCellItem
                icon={<LocalPrintshopIcon />}
                label="Print Sujects"
                showInMenu
              />,
              ],
            },
          ]
        )
      } 

    return (
    <>
      <Paper sx={{p:1, mt:1}}>
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
  
    <Typography variant = "h4" component="h4">Subjects</Typography>
    <DataGrid
        rows={rows}
        columns={Columns()}
        rowsPerPageOptions={[5,10,25,50,100]}
        rowsPerPage ={10}
        density= {"compact"}
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

    </>
    )
    };

export default SubjectsGrid;
