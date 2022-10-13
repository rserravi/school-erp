// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    UserAddOutlined,
    LoadingOutlined,
    CalendarOutlined,
    ProfileOutlined,
    ScheduleOutlined,
    TeamOutlined,
    HomeOutlined,
    SolutionOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    UserAddOutlined,
    CalendarOutlined,
    ProfileOutlined,
    ScheduleOutlined,
    TeamOutlined,
    HomeOutlined,
    SolutionOutlined

};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Principal',
    type: 'group',
    children: [
        {
            id: 'agenda',
            title: 'Agenda',
            type: 'item',
            url: '/agenda',
            icon: icons.ScheduleOutlined
        },
        {
            id: 'staff',
            title: 'Staff',
            type: 'item',
            url: '/staff',
            icon: icons.TeamOutlined
        },
        {
            id: 'students',
            title: 'Students',
            type: 'item',
            url: '/students',
            icon: icons.SolutionOutlined
        },
        {
            id: 'school',
            title: 'School',
            type: 'item',
            url: '/school',
            icon: icons.HomeOutlined

        }
    ]
};

export default utilities;
