/**
 * 
 * Main menu item component
 * @author - NA 
 * @date - 3th December, 2022
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
import {MenuType} from '@/view/routes/type';
import * as PATH from '@/view/routes/constants';

// HOME MENU LIST
export const homeMenuList: MenuType[] = compact([
    {
        id: 'dashboard',
        label: 'Dashboard',
        link: PATH.DASHBOARD_PATH,
        subLinks: PATH.DASHBOARD_PATH,
        icon: <DashboardOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'general.dashboard'
    }
]);

// APPS MENU LIST
export const appsMenuList: MenuType[] = compact([
    {
        id: 'student',
        label: 'Student',
        link: PATH.STUDENT_PATH,
        subLinks: PATH.STUDENT_PATH,
        icon: <PersonOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'admin.student'
    },
    {
        id: 'mentor',
        label: 'Mentor',
        link: PATH.MENTOR_PATH,
        subLinks: PATH.MENTOR_PATH,
        icon: <SchoolOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'admin.mentor'
    },
    {
        id: 'report',
        label: 'Report',
        link: PATH.REPORT_PATH,
        subLinks: PATH.REPORT_PATH,
        icon: <AssessmentOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'mentor.report'
    },
    {
        id: 'techStack',
        label: 'Tech Stack',
        link: PATH.TECH_STACK_PATH,
        subLinks: PATH.TECH_STACK_PATH,
        icon: <CodeOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'mentor.techStack'
    },
    {
        id: 'roadmap',
        label: 'Roadmap',
        link: PATH.ROADMAP_PATH,
        subLinks: PATH.ROADMAP_PATH,
        icon: <RouteOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'mentor.roadmap'
    },
    {
        id: 'task',
        label: 'Task',
        link: PATH.TASK_PATH,
        subLinks: PATH.TASK_PATH,
        icon: <TaskOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'mentor.task'
    },
]);

// MY PROFILE MENU LIST
export const myProfileMenuList: MenuType[] = compact([
    {
        id: 'studentTechStack',
        label: 'Tech Stack',
        link: PATH.STUDENT_PATH,
        subLinks: PATH.STUDENT_PATH,
        icon: <CodeOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'student.techStack'
    },
    {
        id: 'studentTask',
        label: 'Task',
        link: PATH.MENTOR_PATH,
        subLinks: PATH.MENTOR_PATH,
        icon: <TaskOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'student.task'
    },
    {
        id: 'studentRoadmap',
        label: 'Roadmap',
        link: PATH.REPORT_PATH,
        subLinks: PATH.REPORT_PATH,
        icon: <RouteOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'student.roadmap'
    },
    {
        id: 'studentMockInterview',
        label: 'Mock Interview',
        link: PATH.TECH_STACK_PATH,
        subLinks: PATH.TECH_STACK_PATH,
        icon: <CodeOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'student.mockInterview'
    },
]);

// SETTINGS MENU LIST
export const settingsMenuList: MenuType[] = compact([
    {
        id: 'settings',
        label: 'Settings',
        link: PATH.SETTINGS_PATH,
        subLinks: PATH.SETTINGS_PATH,
        icon: <SettingsOutlined style={{fontSize: '20px'}}/>,
        submenuList: [],
        permissionKey: 'general.settings'
    } 
]);