// assets
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - STUDENTS ||============================== //

export const studentsMenu = {
    id: 'students',
    title: 'Students',
    type: 'group',
    children: [
        {
            id: 'Main',
            title: 'Main',
            type: 'item',
            url: '/students',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'addStudent',
            title: 'Add Student',
            type: 'item',
            url: '/students/add-student',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'seeStudent',
            title: 'See Students',
            type: 'item',
            url: '/students/see-students',
            icon: icons.ProfileOutlined,
            target: true
        }
        ,
        {
            id: 'grades',
            title: 'Grades',
            type: 'item',
            url: '/students/grades',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};


export const staffMenu = {
    id: 'staff',
    title: 'Staff',
    type: 'group',
    children: [
        {
            id: 'Main',
            title: 'Main',
            type: 'item',
            url: '/staff',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'addStaff',
            title: 'Add Staff',
            type: 'item',
            url: '/staff/add-staff',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'seeStaff',
            title: 'See Staff',
            type: 'item',
            url: '/staff/see-staff',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'grades',
            title: 'Grades',
            type: 'item',
            url: '/staff/grades',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export const schoolMenu = {
    id: 'school',
    title: 'School',
    type: 'group',
    children: [
        {
            id: 'Main',
            title: 'Main',
            type: 'item',
            url: '/school',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'classrooms',
            title: 'Classrooms',
            type: 'item',
            url: '/school/classrooms',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'equipment',
            title: 'Equipment',
            type: 'item',
            url: '/school/equipment',
            icon: icons.ProfileOutlined,
            target: true
        }
        ,
        {
            id: 'subjects',
            title: 'Subjects',
            type: 'item',
            url: '/school/subjects',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'sessions',
            title: 'Sessions',
            type: 'item',
            url: '/school/sessions',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export const peopleMenu = {
    id: 'people',
    title: 'People',
    type: 'group',
    children: [
        {
            id: 'Main',
            title: 'Main',
            type: 'item',
            url: '/people',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'leads',
            title: 'Leads',
            type: 'item',
            url: '/people/leads',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'tasks',
            title: 'Tasks',
            type: 'item',
            url: '/people/leads',
            icon: icons.ProfileOutlined,
            target: true
        }
    ]
};

export const errorMenu = {
    id: 'error',
    title: 'Error',
    type: 'group',
    children: [
        {
            id: 'error',
            title: 'Error',
            type: 'item',
            url: '/error',
            icon: icons.LoginOutlined,
            target: true
        }
    ]
};
