/**
 * 
 * View Teacher component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// API IMPORT
import {useTeacherByIdQuery} from '@/api/teacher/teacher';
import {useStudentListQuery} from '@/api/student/student';
import ViewStudentListForm from './components/viewStudentListForm';
  
type ViewStudentListPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewStudentListPopup = ({onClose, id}: ViewStudentListPopupProps) => {
    const teacherByIdQuery = useTeacherByIdQuery(id);
    const studentListQuery = useStudentListQuery();

    if (!studentListQuery.data || (id && !teacherByIdQuery?.data)) return null;
    console.log(teacherByIdQuery.data)
    return (
        <ViewStudentListForm
            onClose={onClose}
            data={teacherByIdQuery.data}
            studentOptions={studentListQuery.data}
        />
    );
};

export default ViewStudentListPopup;
  