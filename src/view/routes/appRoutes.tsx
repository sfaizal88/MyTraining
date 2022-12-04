/**
 * 
 * App Routes
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import { Route, Routes } from 'react-router-dom';
import {Box} from '@mui/material';

// ROUTER IMPORT
import useStyles from '@/view/routes/styles';
import * as PATH from '@/view/routes/constants';

// GENERIC VIEW IMPORT 
import {SideMenu, Header, Footer} from '@/view/molecules';

// PAGE IMPORT 
import Dashboard from '@/view/pages/dashboard';
import StudentPage from '@/view/pages/student';
import TeacherPage from '@/view/pages/teacher';
import RoadmapPage from '@/view/pages/roadmap';
import TechStackPage from '@/view/pages/techStack';
import ReportPage from '@/view/pages/report';
import TaskPage from '@/view/pages/task';
import NoPage from '@/view/pages/error/noPage';
import ProfilePage from '@/view/pages/profile';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// MOCK DATA FATER USER LOGIN
import { mockData as loginMockData } from '@/view/pages/login/mock/details';

const AppRoutes = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // RENDER HTML
    return (
        <UserContext.Provider value={loginMockData}>
            <Box className={classes.sideMenu}>
                <SideMenu/>
            </Box>
            <Box className={classes.layout}>
                <Header/>
                <Box className={classes.bodyContent}>
                    <Routes>
                        <Route path={PATH.DASHBOARD_PATH} element={<Dashboard />}/>
                        <Route path={PATH.STUDENT_PATH} element={<StudentPage />}/>
                        <Route path={PATH.TEACHER_PATH} element={<TeacherPage />}/>
                        <Route path={PATH.ROADMAP_PATH} element={<RoadmapPage />}/>
                        <Route path={PATH.TECH_STACK_PATH} element={<TechStackPage />}/>
                        <Route path={PATH.REPORT_PATH} element={<ReportPage />}/>
                        <Route path={PATH.TASK_PATH} element={<TaskPage />}/>
                        <Route path={PATH.STUDENT_REPORT_PATH} element={<ProfilePage />}/>
                        <Route path={PATH.PROFILE_PATH} element={<ProfilePage />}/>
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </Box>
                <Footer/>
            </Box>
        </UserContext.Provider>
    );
};

export default AppRoutes;