/**
 * 
 * Add Student Landing component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useStudentByIdQuery} from '@/api/student/student';

// STUDENT IMPORT
import AddStudentForm from './form/addStudentForm';
  
// PROPS TYPE
type AddStudentPopupProps = {
    onClose: () => void;
    studentId?: number | null;
};

// DEFAULT COMPONENT
const AddStudentPopup = ({onClose, studentId}: AddStudentPopupProps) => {
    // API CALL
    const studentByIdQuery = useStudentByIdQuery(studentId);

    // LOADER CHECK
    if ((studentId && !studentByIdQuery?.data)) return <Loader/>;

    return (
        <AddStudentForm
            onClose={onClose}
            data={studentByIdQuery.data}
        />
    );
};

export default AddStudentPopup;
  