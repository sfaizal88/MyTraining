/**
 * 
 * View Task component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import {useContext} from 'react';
import {useStudentListQuery} from '@/api/student/student';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// STUDENT COMPONENT IMPORT
import {useViewStudentListPopup} from '@/view/pages/mentor/components/viewSudentListPopup/hooks';

// FORM IMPORT
import ViewTaskForm from './form/viewTaskForm';
  
type ViewTaskPopupProps = {
    onClose: () => void;
};

const ViewTaskPopup = ({onClose}: ViewTaskPopupProps) => {
    const studentListQuery = useStudentListQuery();

    // DECLARE HOOK CALL
    const viewStudentListPopup = useViewStudentListPopup();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const taskDetails = profileContext.task[2];

    if (!studentListQuery.data) return null;
    return (
        <>
            <ViewTaskForm
                onClose={onClose}
                data={taskDetails}
                studentOptions={studentListQuery.data}
                onStudentList={viewStudentListPopup.show}
            />
            {viewStudentListPopup.child}
        </>
    );
};

export default ViewTaskPopup;
  