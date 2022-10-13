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
        }
    ]
};

export default MainRoutes;
