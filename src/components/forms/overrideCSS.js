import { Divider, MenuItem, TextField } from "../../../node_modules/@mui/material/index";
import { styled } from '@mui/material/styles';

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',

    },
    "& .MuiInputBase-root": {
        height: 25
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderWidth: 1,

      },
      '&.Mui-focused fieldset': {
        borderColor: 'red',
        borderWidth: 1,

      },
    },
  });


export const CssMenuItem = styled(MenuItem)({
    '& .MuiMenuItem-root': {
      fontSize: 8,
    }
  });

export const CssDivider = styled(Divider)({
    "&::before, &::after": {
        borderColor: "black",
      },
})