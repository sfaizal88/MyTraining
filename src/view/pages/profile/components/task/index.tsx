/**
 * 
 * Task page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { Box, Paper } from '@mui/material';
import {useContext} from 'react';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';
import {TaskCard} from '@/view/organisms';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// API
import {TaskGetItem} from '@/api/task/task';
import {useStudentListQuery} from '@/api/student/student';

// ROADMAP IMPORT
import {useViewStudentListPopup} from '@/view/pages/teacher/components/viewStudentListPopup/hooks';

// STYLE IMPORT
import useStyles from '../../styles';

// ROADMAP LIST COMPONENT DECLARE
const Task = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const taskList = profileContext.task;

    // DECLARE API CALL
    const studentListQuery = useStudentListQuery();

    // DECLARE HOOK CALL
    const viewStudentListPopup = useViewStudentListPopup();

    // IF API LOADS, TURN ON LOADER
    if (!studentListQuery.data) return <Loader/>;

    return (
        <Paper className={classes.profileContentLayout}>
            {taskList.length > 0 ? 
            <Box className={classes.grid4}>
                {taskList.map((item: TaskGetItem) => (
                    <TaskCard 
                        {...item}
                        key={item.id}
                        onStudentList={viewStudentListPopup.show}
                        studentOptions={studentListQuery.data}
                        showStatus
                    />
            ))}</Box> : (
                <EmptyScreen
                    title={'No Task added'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {viewStudentListPopup.child}
        </Paper>
    )
}

export default Task;