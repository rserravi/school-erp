// material-ui
//import { Typography } from '@mui/material';
import { Button } from '../../../node_modules/@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';

// project import
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const AddStaff = () => (
    <>
    <Stack direction="row" spacing={2}>
        <Button href="/staff">Main</Button>
        <Button variant="outlined">Add Staff</Button>
        <Button href="/staff/see-staff">See Staff</Button>
        <Button href="/staff/grades">Grades</Button>
    </Stack>
    </>
);

export default AddStaff;
