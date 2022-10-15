// material-ui
//import { Typography } from '@mui/material';
import { Button } from '../../../node_modules/@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';

// project import
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const Students = () => (
    <>
    <Stack direction="row" spacing={2}>
        <Button variant="outlined">Main</Button>
        <Button href="/students/add-student">Add Student</Button>
        <Button href="/students/see-students">See Students</Button>
        <Button href="/students/grades">Grades</Button>
    </Stack>
    </>
);

export default Students;
