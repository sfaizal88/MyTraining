/**
 * 
 * View Task component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useTaskByIdQuery} from '@/api/task/task';
import {useStudentListQuery} from '@/api/student/student';

// STUDENT COMPONENT IMPORT
import {useViewStudentListPopup} from '@/view/pages/mentor/components/viewSudentListPopup/hooks';

// FORM IMPORT
import ViewTaskForm from './form/viewTaskForm';
  
type ViewTaskPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewTaskPopup = ({onClose, id}: ViewTaskPopupProps) => {
    const taskByIdQuery = useTaskByIdQuery(id);
    const studentListQuery = useStudentListQuery();

    // DECLARE HOOK CALL
    const viewStudentListPopup = useViewStudentListPopup();

    if (!studentListQuery.data || !taskByIdQuery?.data) return <Loader/>;
    return (
        <>
            <ViewTaskForm
                onClose={onClose}
                data={taskByIdQuery.data}
                studentOptions={studentListQuery.data}
                onStudentList={viewStudentListPopup.show}
            />
            {viewStudentListPopup.child}
        </>
    );
};

export default ViewTaskPopup;
  