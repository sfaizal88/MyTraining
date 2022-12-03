/**
 * 
 * Add Task component
 * @author - NA 
 * @date - 3th December, 2022 faizal
 * 
 */
// API IMPORT
import {useTaskByIdQuery} from '@/api/task/task';
import {useStudentOptionsQuery} from '@/api/student/student';
import AddTaskForm from './components/addTaskForm';

type AddTaskPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddTaskPopup = ({onClose, id}: AddTaskPopupProps) => {
    const taskByIdQuery = useTaskByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || (id && !taskByIdQuery?.data)) return null;

    return (
        <AddTaskForm
            onClose={onClose}
            data={taskByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default AddTaskPopup;
  