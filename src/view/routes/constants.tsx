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
    RouteOutlined,
    CodeOutlined,
} from '@mui/icons-material';

// ROUTER IMPORT
import {MenuType} from './type';

// ROUTE URL
export const LOGIN_PATH = '/';
export const DASHBOARD_PATH = '/home';
export const STUDENT_PATH = '/student';
export const TEACHER_PATH = '/teacher';
export const REPORT_PATH = '/report';
export const STUDENT_REPORT_PATH = '/report/:id';
export const TASK_PATH = '/task';
export const TECH_STACK_PATH = '/techStack';
export const MOCK_INTERVIEW_PATH = '/mockInterview';
export const SETTINGS_PATH = '/settings';
export const ROADMAP_PATH = '/roadmap';
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
        id: 'mockInterview',
        label: 'Mock Interview',
        permissionKey: 'mockInterview',
        link: MOCK_INTERVIEW_PATH,
        subLinks: MOCK_INTERVIEW_PATH,
        icon: <AssessmentOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'techStack',
        label: 'Tech Stack',
        permissionKey: 'techStack',
        link: TECH_STACK_PATH,
        subLinks: TECH_STACK_PATH,
        icon: <CodeOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    },
    {
        id: 'roadmap',
        label: 'Roadmap',
        permissionKey: 'roadmap',
        link: ROADMAP_PATH,
        subLinks: ROADMAP_PATH,
        icon: <RouteOutlined style={{fontSize: '20px'}}/>,
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
        id: 'settings',
        label: 'Settings',
        permissionKey: 'settings',
        link: SETTINGS_PATH,
        subLinks: SETTINGS_PATH,
        icon: <SettingsOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
    }
]);