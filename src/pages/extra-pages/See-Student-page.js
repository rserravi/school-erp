//import { Typography } from '@mui/material';
import { Button } from '../../../node_modules/@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';

// project import
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SeeStudent = () => (
    <>
    <Stack direction="row" spacing={2}>
        <Button href="/students">Main</Button>
        <Button href="/students/add-student">Add Student</Button>
        <Button variant="outlined">See Students</Button>
        <Button href="/students/grades">Grades</Button>
    </Stack>
    </>
);

export default SeeStudent;
