/**
 * 
 * Task list component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { Box } from '@mui/material';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';
import {TaskCard} from '@/view/organisms';

// API
import {TaskGetItem, useTaskListQuery} from '@/api/task/task';
import {useStudentListQuery} from '@/api/student/student';

// ROADMAP IMPORT
import {useDeleteTaskPopup} from './hooks';
import {useViewTaskPopup} from '../viewTaskPopup/hooks';
import {useViewStudentListPopup} from '@/view/pages/teacher/components/viewStudentListPopup/hooks';

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

    // IF API LOADS, TURN ON LOADER
    if (!taskListQuery.data || !studentListQuery.data) return <Loader/>;

    return (
        <>
            {taskListQuery.data.length > 0 ? 
            <Box className={classes.grid4}>
                {taskListQuery.data.map((item: TaskGetItem) => (
                    <TaskCard 
                        {...item}
                        key={item.id}
                        onEdit={onEdit}
                        onDelete={deleteTaskPopup.show}
                        onView={viewTaskPopup.show}
                        onStudentList={viewStudentListPopup.show}
                        studentOptions={studentListQuery.data}
                        showActions
                        showView
                    />
            ))}</Box> : (
                <EmptyScreen
                    title={'No Task'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteTaskPopup.child}
            {viewTaskPopup.child}
            {viewStudentListPopup.child}
        </>
    )
}

export default TaskList;