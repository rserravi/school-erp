import React from "react";

import { Box, IconButton, Modal, Typography } from "@mui/material/index";
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Tooltip } from "../../../node_modules/@mui/material/index";


const styledBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const RenderSubjectCells = (props) => {
    const {hasFocus, value } = props;
    const {id} = props.row;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);
    const numberOfSubjects = props.row.subjects.length
    const [openDialog, setOpenDialog] = React.useState(false);
    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);
    


   // const email = props.row.emails[0].emailUrl

   const subjectsArray = props.row.subjects.map((item)=>{
    return(
        <>
            {item.name + " (" + item.period + ")"}
        </>
    )
   })
  
    React.useLayoutEffect(() => {
      if (hasFocus) {
        const input = buttonElement.current?.querySelector('input');
        input?.focus();
      } else if (rippleRef.current) {
        // Only available in @mui/material v5.4.1 or later
        rippleRef.current.stop({});
      }
    }, [hasFocus]);
  
    return (
       <>
        {numberOfSubjects}
        <Tooltip title="See Subjects">
        <IconButton aria-label="see Subject" onClick={handleOpenDialog}>
            <VisibilityTwoToneIcon />
        </IconButton>
        </Tooltip>
        <Modal
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={styledBox}>
            <Typography id="modal-title" variant="h6" component="h2">
                Subjects of <strong>{props.row.firstname + " "+props.row.lastname}</strong>
            </Typography>
            <Typography id="modal-description" sx={{ mt: 2 }}>
                <ul>
               {props.row.subjects.map((item)=>{
                    return(
                    <ol style={{ listStyleType:"decimal" }}> {item.name + " (" + item.period + ")"}</ol>
                    )     
               })}
               </ul>
            </Typography>
            </Box>
        </Modal>

        </>
    
    );
  };

