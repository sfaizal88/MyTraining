/**
 * 
 * Router constant
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import compact from 'lodash/compact';
import {
    DashboardOutlined, 
    PersonOutlined, 
    AssessmentOutlined,
    TaskOutlined,
    SettingsOutlined,
    SchoolOutlined,
} from '@mui/icons-material';

// ROUTER IMPORT
import {MenuType} from './type';

// ROUTE URL
export const LOGIN_PATH = '/';
export const DASHBOARD_PATH = '/home';
export const STUDENT_PATH = '/student';
export const TEACHER_PATH = '/teacher';
export const REPORT_PATH = '/report';
export const TASK_PATH = '/task';
export const SETTINGS_PATH = '/settings';
export const OTHER_PATH = '*';

// MENU STRUCTURE
export const menuList: MenuType[] = compact([
    {
        id: 'dashboard',
        label: 'Dashboard',
        permissionKey: 'dashboard',
        link: DASHBOARD_PATH,
        subLinks: DASHBOARD_PATH,
        icon: <DashboardOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'student',
        label: 'Student',
        permissionKey: 'student',
        link: STUDENT_PATH,
        subLinks: STUDENT_PATH,
        icon: <PersonOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'teacher',
        label: 'Teacher',
        permissionKey: 'teacher',
        link: TEACHER_PATH,
        subLinks: TEACHER_PATH,
        icon: <SchoolOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'report',
        label: 'Report',
        permissionKey: 'report',
        link: REPORT_PATH,
        subLinks: REPORT_PATH,
        icon: <AssessmentOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'task',
        label: 'Task',
        permissionKey: 'task',
        link: TASK_PATH,
        subLinks: TASK_PATH,
        icon: <TaskOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'setting',
        label: 'Setting',
        permissionKey: 'setting',
        link: SETTINGS_PATH,
        subLinks: SETTINGS_PATH,
        icon: <SettingsOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    }
]);