/**
 * 
 * Add Teacher component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import {useTeacherByIdQuery} from '@/api/teacher/teacher';
import {useStudentOptionsQuery} from '@/api/student/student';
import AddTeacherForm from './form/addTeacherForm';
  
type AddTeacherPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddTeacherPopup = ({onClose, id}: AddTeacherPopupProps) => {
    const teacherByIdQuery = useTeacherByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || (id && !teacherByIdQuery?.data)) return null;
    console.log(teacherByIdQuery.data)
    return (
        <AddTeacherForm
            onClose={onClose}
            data={teacherByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default AddTeacherPopup;
  