/**
 * 
 * Task list component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { Box } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';

// API
import {TaskGetItem, useTaskListQuery} from '@/api/task/task';
import {useStudentListQuery} from '@/api/student/student';

// ROADMAP IMPORT
import TaskListCard from './taskListCard';
import {useDeleteTaskPopup} from './hooks';
import {useViewTaskPopup} from '../viewTaskPopup/hooks';
import {useViewStudentListPopup} from '@/view/pages/teacher/components/viewStudentListPopup/hooks';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from './styles';

type TaskListProps = {
    onEdit: (id: number | null) => void;
}

// ROADMAP LIST COMPONENT DECLARE
const TaskList = ({
    onEdit
}: TaskListProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE API CALL
    const taskListQuery = useTaskListQuery();
    const studentListQuery = useStudentListQuery();

    // DECLARE HOOK CALL
    const deleteTaskPopup = useDeleteTaskPopup();
    const viewTaskPopup = useViewTaskPopup();
    const viewStudentListPopup = useViewStudentListPopup();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    // IF API LOADS, TURN ON LOADER
    if (!taskListQuery.data || !studentListQuery.data) return <Loader/>;

    return (
        <Box className={classes.grid4}>
            {taskListQuery.data.length > 0 ? 
                taskListQuery.data.map((item: TaskGetItem) => (
                    <TaskListCard
                        {...item}
                        key={item.id}
                        onEdit={onEdit}
                        onDelete={deleteTaskPopup.show}
                        onView={viewTaskPopup.show}
                        onStudentList={viewStudentListPopup.show}
                        studentOptions={studentListQuery.data}
                    />
            )) : (
                <EmptyScreen
                    title={'No Task'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteTaskPopup.child}
            {viewTaskPopup.child}
            {viewStudentListPopup.child}
        </Box>
    )
}

export default TaskList;