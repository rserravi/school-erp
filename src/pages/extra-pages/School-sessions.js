// material-ui
import { Button } from '../../../node_modules/@mui/material/index';
import { Stack } from '../../../node_modules/@mui/material/index';

// project import
//import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const SchoolSessions = () => (
    <>
         <Stack direction="row" spacing={2}>
         <Button href="/school" >Main</Button>
         <Button href="/school/classrooms">Classrooms</Button>
         <Button href="/school/equipment">Equipment</Button>
         <Button href="/school/subjects">Subjects</Button>
         <Button variant="outlined">Sessions</Button>
       </Stack>
    </>
);

export default SchoolSessions;