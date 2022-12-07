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
import {SideMenu, Header, Footer, IdleTimer, PermissionGuard} from '@/view/molecules';

// PAGE IMPORT 
import Dashboard from '@/view/pages/dashboard';
import StudentPage from '@/view/pages/student';
import MentorPage from '@/view/pages/mentor';
import RoadmapPage from '@/view/pages/roadmap';
import TechStackPage from '@/view/pages/techStack';
import ReportPage from '@/view/pages/report';
import TaskPage from '@/view/pages/task';
import NoPage from '@/view/pages/error/noPage';
import ProfilePage from '@/view/pages/profile';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// UTILS IMPORT
import {getStorage} from '@/utils/helper';

const AppRoutes = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE LOCAL VAR
    const userInitialData = JSON.parse(getStorage("userObject") || "");
    console.log("userInitialData: ", userInitialData);
    
    // RENDER HTML
    return (
        <UserContext.Provider value={userInitialData}>
            <Box className={classes.sideMenu}>
                <SideMenu/>
            </Box>
            <Box className={classes.layout}>
                <Header/>
                <IdleTimer/>
                <Box className={classes.bodyContent}>
                    <Routes>
                        <Route path={PATH.DASHBOARD_PATH} element={
                            <PermissionGuard permissionkey={'general.dashboard'}>
                                <Dashboard />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.STUDENT_PATH} element={
                            <PermissionGuard permissionkey={'admin.student'}>
                                <StudentPage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.MENTOR_PATH} element={
                            <PermissionGuard permissionkey={'admin.mentor'}>
                                <MentorPage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.ROADMAP_PATH} element={
                            <PermissionGuard permissionkey={'mentor.roadmap'}>
                                <RoadmapPage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.TECH_STACK_PATH} element={
                            <PermissionGuard permissionkey={'mentor.techStack'}>
                                <TechStackPage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.REPORT_PATH} element={
                            <PermissionGuard permissionkey={'mentor.report'}>
                                <ReportPage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.TASK_PATH} element={
                            <PermissionGuard permissionkey={'mentor.task'}>
                                <TaskPage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.STUDENT_REPORT_PATH} element={
                            <PermissionGuard permissionkey={'mentor.report'}>
                                <ProfilePage />
                            </PermissionGuard>
                        }/>
                        <Route path={PATH.PROFILE_PATH} element={
                            <PermissionGuard permissionkey={'mentor.report'}>
                                <ProfilePage />
                            </PermissionGuard>
                        }/>
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </Box>
                <Footer/>
            </Box>
        </UserContext.Provider>
    );
};

export default AppRoutes;