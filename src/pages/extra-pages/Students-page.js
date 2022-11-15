// material-ui
import React from 'react';
import HorizontalNav from 'layout/MainLayout/HorizontalMenu/Horizontal-Menu';
import { GetAllStudents } from 'api/schoolApi';
import { useSelector } from 'react-redux';

// project import
//import MainCard from 'components/MainCard';

//ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SearchIcon from '@mui/icons-material/Search';

import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Avatar, Box, InputAdornment, Paper, TextField, Tooltip } from '../../../node_modules/@mui/material/index';
import { GridActionsCellItem } from '../../../node_modules/@mui/x-data-grid/components/cell/GridActionsCellItem';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { RenderEmailCell } from 'components/grids/EmailCels';
import { RenderPhoneCell } from 'components/grids/PhoneCells';
import { RenderMessageCells } from 'components/grids/MessagesCells';
import { RenderSubjectCells } from 'components/grids/SubjectCells';
import { StudentCard } from 'components/forms/studentCard';

// ==============================|| STUDENTS PAGE ||============================== //

const Students = () => {
    const [studentData, setStudentData] = React.useState([])
    const [studentDataOriginal, setStudentDataOriginal] = React.useState([])
    const [firstLoad, setFirstLoad]= React.useState(true);
    const activeUser = useSelector(state => state.user)
    const [selectedItem, setSelectedItem] = React.useState([]);
    var company = activeUser.loggedUser.company
    var boxHeight = 400;

    React.useEffect(()=>{
        // console.log("EN USE EFFECT CUSTOMER CONENTE")
         if (firstLoad){
         GetAllStudents(company.mongoDataBase).then((data)=>{
           setStudentData(data.result);
           setStudentDataOriginal(data.result)
           setFirstLoad(false);
       }
       ).catch((error)=>{
         console.log(error)
       })}
       },[firstLoad, company.mongoDataBase])


    const setStudentActive = (id) =>{
        const result = studentData.filter((item)=>item._id === id)
        //console.log("RESULTADO DE SETSTUDENTACTIVE", result, "EN ARRAY ", studentData)
        setSelectedItem(result)
    }

    const handleSearchChange = (event) =>{
      event.preventDefault();
      console.log(event.target.value)
      const newArray = studentDataOriginal.filter(item => item.firstname.includes(event.target.value) || item.lastname.includes(event.target.value))
      console.log(newArray)
      setStudentData(newArray);
    }


    const rows = studentData.map((row) => 
       (
         {
           id: row._id, 
           picture: row.picture.file,
           firstname: row.firstname, 
           lastname: row.lastname,
           messages: row.contactHistory,
           email: row.emails[0].emailUrl,
           phone: row.phones[0].telNum,
           subjects: row.studentInterface.subjects
           
         }
       )
     );
    
    const Columns = () => {
  
        return(
          [
            { field: 'id', headerName: "Id", width: 20, hide:"true" },
          
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
            { field: 'messages', headerName: "Messages", width: 80, renderCell:(params)=>RenderMessageCells(params)},
            { field: 'subjects', headerName: "Subjects", width: 80, renderCell:(params)=>RenderSubjectCells(params)},
            { field: 'email', headerName:"Email", width: 183, renderCell:(params)=>RenderEmailCell(params)},
            { field: 'phone', headerName: "Phone", width: 190, renderCell:(params)=>RenderPhoneCell(params)},
            {
              field: 'actions',
              type: 'actions',
              headerName: "",
              width: 80,
              sortable: false,
              getActions: (params) => [
                <GridActionsCellItem
                icon={<Tooltip title="See Student"><VisibilityIcon /></Tooltip>}
                label="See Student"
                onClick={(event) => {
                    setStudentActive(params.id);
                    event.stopPropagation();
                }}
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
    <HorizontalNav type="students" />
    <TextField
        id="searchField"
        label="Seach Student"
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
    
    {activeUser!==null?<StudentCard student={selectedItem}/>:<></>}
    </>
    )
    };

export default Students;
