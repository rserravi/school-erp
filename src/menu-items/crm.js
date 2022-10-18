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
    SolutionOutlined,
    CheckOutlined,
    BarChartOutlined
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
    SolutionOutlined,
    CheckOutlined,
    BarChartOutlined

};

// ==============================|| MENU ITEMS - CRM ||============================== //

const crm = {
    id: 'crm',
    title: 'CRM',
    type: 'group',
    children: [
        {
            id: 'people',
            title: 'People',
            type: 'item',
            url: '/people',
            icon: icons.TeamOutlined,
            breadcrumbs: false
           
        },
        {
            id: 'deals',
            title: 'Deals',
            type: 'item',
            url: '/deals',
            icon: icons.CheckOutlined,
            breadcrumbs: false
        },
        {
            id: 'analytics',
            title: 'Analytics',
            type: 'item',
            url: '/analytics',
            icon: icons.BarChartOutlined,
            breadcrumbs: false
        }
    ]
};

export default crm;
