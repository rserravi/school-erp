import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - utilities

const Agenda = Loadable(lazy(()=> import('pages/extra-pages/Agenda')));
const Staff = Loadable(lazy(()=> import('pages/extra-pages/Staff-page')));
const Students = Loadable(lazy(()=> import('pages/extra-pages/Students-page')));
const School = Loadable(lazy(()=> import('pages/extra-pages/School-page')));

const AddStudent = Loadable(lazy(()=> import('pages/extra-pages/Add-Student-page')));
const SeeStudent = Loadable(lazy(()=> import('pages/extra-pages/See-Student-page')));

const AddStaff = Loadable(lazy(()=> import('pages/extra-pages/Add-Staff-page')));
const SeeStaff = Loadable(lazy(()=> import('pages/extra-pages/See-Staff-page')));

const Classrooms = Loadable(lazy(()=> import('pages/extra-pages/School-classrooms')));
const Equipment = Loadable(lazy(()=> import('pages/extra-pages/School-equipment')));
const Sessions = Loadable(lazy(()=> import('pages/extra-pages/School-sessions')));
const Subjects = Loadable(lazy(()=> import('pages/extra-pages/School-subjects')));

const People = Loadable(lazy(()=> import('pages/extra-pages/People-page')));
const Leads = Loadable(lazy(()=> import('pages/extra-pages/people-leads')));


const Setup = Loadable(lazy(()=> import('pages/extra-pages/Setup')));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'setup',
            element: <Setup />
        },
        {
            path: 'agenda',
            element: <Agenda />
        },
        {
            path: 'staff',
            element: <Staff />
        },
        {
            path: 'students',
            element: <Students />
        },
        {
            path: 'school',
            element: <School />
        },
        {
            path: '/students/add-student',
            element: <AddStudent />
        },
        {
            path: '/students/see-students',
            element: <SeeStudent />
        },
        {
            path: '/staff/add-staff',
            element: <AddStaff />
        },
        {
            path: 'staff/see-staff',
            element: <SeeStaff />
        },
        {
            path: 'school/classrooms',
            element: <Classrooms />
        },
        {
            path: 'school/equipment',
            element: <Equipment />
        },
        {
            path: 'school/sessions',
            element: <Sessions />
        }
        ,
        {
            path: 'school/subjects',
            element: <Subjects />
        }
        ,
        {
            path: 'people',
            element: <People />
        }
        ,
        {
            path: 'people/leads',
            element: <Leads />
        }


    ]
};

export default MainRoutes;
