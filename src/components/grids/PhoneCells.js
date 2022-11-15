import React from "react";
import { IconButton, Tooltip } from "@mui/material/index";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const RenderPhoneCell = (props) => {
    const {hasFocus, value } = props;
    const {id, whatsapp} = props.row;
    //const phone = getPhone(props.row);
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

    const callUser = (id, value) =>{
        console.log("Calling to " + id + " at " + value )
      }
    
    const whatsappUser = (id, value) =>{
        console.log("Whatsapping to " + id + " at " + value )
       
      }
  
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
       
        <Tooltip title="Call">
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
              callUser(id, value);
              event.stopPropagation();
            }}
          
          >
            <PhoneForwardedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Send Whatsapp">
          <IconButton
            component="button"
            ref={buttonElement}
            touchRippleRef={rippleRef}
            variant="contained"
            color='primary'
            size="small"
            style={{ marginLeft: 5 }}
            // Remove button from tab sequence when cell does not have focus
            tabIndex={hasFocus ? 0 : -1}
            onKeyDown={(event) => {
              if (event.key === ' ') {
                // Prevent key navigation when focus is on button
                event.stopPropagation();
              }
            }}
        
            onClick={(event) => {
              whatsappUser(id, value);
              event.stopPropagation();
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Tooltip>
        {value}
        </>
    );
  };