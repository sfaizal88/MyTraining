import {useStudentByIdQuery} from '@/api/student/student';
import AddStudentForm from './form/addStudentForm';
  
type AddStudentPopupProps = {
onClose: () => void;
studentId?: number | null;
};

const AddStudentPopup = ({onClose, studentId}: AddStudentPopupProps) => {
    const studentByIdQuery = useStudentByIdQuery(studentId);

    if ((studentId && !studentByIdQuery?.data)) return null;
    console.log(studentByIdQuery.data)
    return (
        <AddStudentForm
            onClose={onClose}
            data={studentByIdQuery.data}
        />
    );
};

export default AddStudentPopup;
  