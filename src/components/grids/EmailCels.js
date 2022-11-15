import React from "react";
import { IconButton, Tooltip } from "@mui/material/index";
import SendIcon from '@mui/icons-material/Send';

export const RenderEmailCell = (props) => {
    const {hasFocus, value } = props;
    const {id} = props.row;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

    const emailUser = (id, mail) =>{
       
        console.log("Sending email to " + id + " at " + mail )
      
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
       
        <Tooltip title="Send Email">
          <IconButton
            component="button"
            ref={buttonElement}
            touchRippleRef={rippleRef}
            variant="contained"
            color='primary'
            size="small"
            style={{ marginLeft: 0 }}
            // Remove button from tab sequence when cell does not have focus
            tabIndex={hasFocus ? 0 : -1}
            onKeyDown={(event) => {
              if (event.key === ' ') {
                // Prevent key navigation when focus is on button
                event.stopPropagation();
              }
            }}
        
            onClick={(event) => {
              emailUser(id, value);
              event.stopPropagation();
            }}
          
          >
            <SendIcon />
          </IconButton>
        </Tooltip>
        {value}
        </>
    );
  };

