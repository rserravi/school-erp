
//import { Typography } from '@mui/material';
import React from 'react';


//ICONS
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import AddCardIcon from '@mui/icons-material/AddCard';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import PaymentIcon from '@mui/icons-material/Payment';



// material-ui
import { Box, Tooltip } from '@mui/material/index';
import { GridActionsCellItem } from '@mui/x-data-grid/components/cell/GridActionsCellItem';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { Button, Grid, Paper, Typography } from '../../../node_modules/@mui/material/index';


// project import


// ==============================|| PAYMENTS GRID ||============================== //

const PaymentsGrid = (props) => {
  //  console.log("PAYMENTS EN STUDENT GRID", props.payments[0].done)
    const [paymentsDoneData, setPaymentsDoneData] = React.useState(props.payments[0].done)
    const [paymentsRemainingData, setPaymentsRemainingData] = React.useState(props.payments[0].remaining)
    var boxHeight = 300;


    const renderAmount =(params)=>{
     
       return(
        <>
          {params.row.amount} €
        </>
       )
        
    }

    const renderExpeditionDate = (params)=>{
 
      const date = new Date(params.value).toLocaleDateString('es-ES');
      return (
        <>
          {date}
        </>
      )

    }

    const rowsDone = paymentsDoneData.map((row) => 
       (
         {
           id: row.id, 
           box: row.box,
           date: row.date,
           concept: row.concept, 
           amount: row.amount,
           from: row.from,
           to: row.to,
         }
       )
     );

     const rowsRemaining = paymentsRemainingData.map((row) => 
       (
         {
           id: row.id, 
           box: row.box,
           date: row.date,
           concept: row.concept, 
           amount: row.amount,
           from: row.from,
           to: row.to,
         }
       )
     );
    
    const ColumnsDone = () => {
  
        return(
          [
            { field: 'id', headerName: "Id", width: 20, hide:"true" },
            { field: 'date', headerName: "Date", width: 100, renderCell:(params)=>renderExpeditionDate(params)},  
            { field: 'concept', headerName: "Concept", width: 200},
            { field: 'amount', headerName: "Amount", width: 60, renderCell:(params)=>renderAmount(params)},
            {
              field: 'actions',
              type: 'actions',
              headerName: "",
              width: 200,
              sortable: false,
              getActions: (params) => [

                <GridActionsCellItem
                  icon={<Tooltip title="RETURN"><CreditCardOffIcon /></Tooltip>}
                  label="RETUNM"
                  
                />,
                <GridActionsCellItem
                  icon={<Tooltip title="Duplicate Payment"><ContentCopyIcon /></Tooltip>}
                  label="Duplicate Payment"
                  
                />,
                <GridActionsCellItem
                  icon={<Tooltip title="Delete Payment"><DeleteIcon /></Tooltip>}
                  label="Delete Payment"
                  
                />,
                <GridActionsCellItem
                  icon={<Tooltip title="Print Payment"><LocalPrintshopIcon /></Tooltip>}
                  label="Print Payments"
                  
                />,
              ],
            },
          ]
        )
      } 
    const ColumnsRemaining = () => {
  
        return(
          [
            { field: 'id', headerName: "Id", width: 20, hide:"true" },
            { field: 'date', headerName: "Date", width: 100, renderCell:(params)=>renderExpeditionDate(params)},  
            { field: 'concept', headerName: "Concept", width: 200},
            { field: 'amount', headerName: "Amount", width: 60, renderCell:(params)=>renderAmount(params)},
            {
              field: 'actions',
              type: 'actions',
              headerName: "",
              width: 200,
              sortable: false,
              getActions: (params) => [

                <GridActionsCellItem
                  icon={<Tooltip title="PAY"><PaymentIcon /></Tooltip>}
                  label="PAY"
                  
                />,
                <GridActionsCellItem
                  icon={<Tooltip title="Duplicate Payment"><ContentCopyIcon /></Tooltip>}
                  label="Duplicate Payment"
                  
                />,
                <GridActionsCellItem
                  icon={<Tooltip title="Delete Payment"><DeleteIcon /></Tooltip>}
                  label="Delete Payment"
                  
                />,
                <GridActionsCellItem
                  icon={<Tooltip title="Print Payment"><LocalPrintshopIcon /></Tooltip>}
                  label="Print Payments"
                  
                />,
              ],
            },
          ]
        )
      } 

    return (
    <>
    <Paper sx={{p:3, mt:1}}>
    <Grid container alignItems="flex-start" sx={{marginTop:0}}>
      <Grid item  xs={12} sm={6} md={6} sx={{marginTop:0}}>
          <Box
              sx={{
                height: boxHeight,
                width: '100%',
                marginTop: 0,
                '& .date-past': {
                  backgroundColor: 'firebrick',
                  color: 'white',
                  fontWeight: '600',
                },
                '& .date-today': {
                  backgroundColor: 'darkorange',
                  color: 'white',
                  fontWeight: '600',
                },
                '& .date-sevendays': {
                  backgroundColor: 'darksalmon',
                  color: 'black',
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
          
      
            <Typography variant = "h4" component="h4">Payments Remaining</Typography>
            <Button variant="outlined" startIcon={<AddCardIcon />} sx={{mt:2}}>Add Remaining Payment </Button>
            <DataGrid
                rows={rowsRemaining}
                columns={ColumnsRemaining()}
                rowsPerPageOptions={[5,10,25,50,100]}
                checkboxSelection = {false}
                getRowId={(row) => row.id}
                rowsPerPage ={10}
                density= {"compact"}
                components={{Toolbar: GridToolbar}}
                getRowClassName={(params) => {
                  if (params.field === 'date') {
                    const date = new Date (params.value);
                    const today = new Date ();
                    const diff = Math.floor(date - today);
                    if (diff < 7){
                      return 'date-past'
                    }
                    if (diff === 0){
                      return 'date-today'

                    }

                    if (diff < 0 && diff > 8){
                      return 'date-sevendays'
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
      </Grid>
      <Grid item  xs={12} sm={6} md={6} sx={{marginTop: 0}} >
          <Box
            sx={{
              height: boxHeight,
              marginTop: 0,
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
            <Typography variant = "h4" component="h4">Payments Done</Typography>
            <Button variant="outlined" startIcon={<AddCardIcon />} sx={{mt:2}}>Add Remaining Payment </Button>
            <DataGrid
                rows={rowsDone}
                columns={ColumnsDone()}
                rowsPerPageOptions={[5,10,25,50,100]}
                checkboxSelection = {false}
                getRowId={(row) => row.id}
                rowsPerPage ={10}
                density= {"compact"}
                components={{Toolbar: GridToolbar}}
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
      </Grid>
    </Grid>
    </Paper>
    </>
    )
    };

export default PaymentsGrid;
