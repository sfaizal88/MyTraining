/**
 * 
 * View Teacher component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import {useTeacherByIdQuery} from '@/api/teacher/teacher';
import {useStudentOptionsQuery} from '@/api/student/student';

// FORM IMPORT
import ViewTeacherForm from './form/viewTeacherForm';
  
type ViewTeacherPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewTeacherPopup = ({onClose, id}: ViewTeacherPopupProps) => {
    const teacherByIdQuery = useTeacherByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || (id && !teacherByIdQuery?.data)) return null;
    console.log(teacherByIdQuery.data)
    return (
        <ViewTeacherForm
            onClose={onClose}
            data={teacherByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default ViewTeacherPopup;
  