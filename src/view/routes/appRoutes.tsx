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
import {SideMenu, Header} from '@/view/molecules';

// PAGE IMPORT 
import Dashboard from '@/view/pages/dashboard';
import StudentPage from '@/view/pages/student';
import TeacherPage from '@/view/pages/teacher/components/teacherPage';
import NoPage from '@/view/pages/error/noPage';

const AppRoutes = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // RENDER HTML
    return (
        <Box className={classes.mainLayout}>
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
                        <Route path="*" element={<NoPage />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
};

export default AppRoutes;