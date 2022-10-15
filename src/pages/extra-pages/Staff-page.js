// material-ui
//import { Typography } from '@mui/material';
import { Button } from '../../../node_modules/@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';

// project import
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Staff = () => (
    <>
    <Stack direction="row" spacing={2}>
        <Button variant="outlined">Main</Button>
        <Button href="staff/add-staff">Add Staff</Button>
        <Button href="staff/see-staff">See Staff</Button>
        <Button href="staff/grades">Grades</Button>
    </Stack>
    </>
);

export default Staff;