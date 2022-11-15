import React from "react";
import { IconButton, Tooltip } from "@mui/material/index";
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import { Badge, Fab } from "../../../node_modules/@mui/material/index";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -12,
    top: 9,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export const RenderMessageCells = (props) => {
    const {hasFocus, value } = props;
    //const {id} = props.row;
    const numberOfMessages = props.row.messages.length
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

    const hasAlerts = (messageArray)=>{
        var alerts = 0
        messageArray.forEach(msgItem => {
            const actionArray = msgItem.followAction
            if (actionArray.length>0){
                actionArray.forEach(actionItem =>{
                    if (new Date(actionItem.date)> new Date()){
                       
                        alerts +=1;
                    }
                    
                })
            }
        });
        return alerts

    }

   // console.log("MENSAJES", props.row);

    const seeAlert = (id, alert) =>{
       
        console.log("Alert from " + id + " at " + alert )
      
      }
   
   // const email = props.row.emails[0].emailUrl
  
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
       <Tooltip title="Messages and actions pendant">
      
       <StyledBadge badgeContent={hasAlerts(props.row.messages)} color="warning">
        {numberOfMessages}
       </StyledBadge>
       </Tooltip>
        </>
    );
  };

