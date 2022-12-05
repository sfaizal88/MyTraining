/**
 * 
 * Task page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { Box, Paper } from '@mui/material';
import {useContext, useState} from 'react';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC IMPORT 
import {Loader, AddButton} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';
import {TaskCard, AssignTaskModal} from '@/view/organisms';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// API
import {TaskGetItem} from '@/api/task/task';
import {useStudentListQuery} from '@/api/student/student';

// HOOK
import {useProfileDetails} from '@/view/pages/profile/hook';

// HOOK IMPORT
import {useViewStudentListPopup} from '@/view/pages/teacher/components/viewStudentListPopup/hooks';
import {useViewTaskPopup} from './components/viewTaskPopup/hooks';

// STYLE IMPORT
import useStyles from '../../styles';

// ROADMAP LIST COMPONENT DECLARE
const Task = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // STATE DECLARE
    const [isOpen, setOpen] = useState(false);

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const taskList = profileContext.task;
    const userId = profileContext.id;

    // DECLARE API CALL
    const studentListQuery = useStudentListQuery();

    // DECLARE HOOK CALL
    const viewStudentListPopup = useViewStudentListPopup();
    const viewTaskPopup = useViewTaskPopup();
    const profileDetails = useProfileDetails();

    // IF API LOADS, TURN ON LOADER
    if (!studentListQuery.data) return <Loader/>;

    return (
        <Paper className={classes.profileContentLayout}>
            {taskList.length > 0 ? 
            <Box mb={3} className={classes.profileContainer}>
                <Box className={classes.content}>
                    <AddButton 
                        customLabel='Assign task' 
                        onClick={() => setOpen(true)} 
                        type="button"
                        hide={profileDetails.isLoginUserStudent()}
                    />
                    
                    <Box className={classes.grid4} mt={3}>
                        {taskList.map((item: TaskGetItem) => (
                            <TaskCard 
                                {...item}
                                key={item.id}
                                onStudentList={viewStudentListPopup.show}
                                studentOptions={studentListQuery.data}
                                showStatus
                                showView
                                onView={viewTaskPopup.show}
                            />
                    ))}
                    </Box>
                </Box>
            </Box> : (
                <EmptyScreen
                    title={'No Task assigned'}
                    subtitle={!profileDetails.isLoginUserStudent() ? 'Assign new task by clicking assign task button' : ''}
                    button={<AddButton customLabel='Assign task' onClick={() => setOpen(true)} type="button" hide={profileDetails.isLoginUserStudent()}/>}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {viewStudentListPopup.child}
            {viewTaskPopup.child}
            {isOpen && <AssignTaskModal userId={userId} isOpen={isOpen} onClose={() => setOpen(false)}/>}
        </Paper>
    )
}

export default Task;