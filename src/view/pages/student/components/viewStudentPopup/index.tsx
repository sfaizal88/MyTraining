import {useStudentByIdQuery} from '@/api/student/student';
import ViewStudentForm from './form/viewStudentForm';
  
type ViewStudentPopupProps = {
onClose: () => void;
studentId?: number | null;
};

const ViewStudentPopup = ({onClose, studentId}: ViewStudentPopupProps) => {
    const studentByIdQuery = useStudentByIdQuery(studentId);

    if ((studentId && !studentByIdQuery?.data)) return null;

    return (
        <ViewStudentForm
            onClose={onClose}
            data={studentByIdQuery.data}
        />
    );
};

export default ViewStudentPopup;
  