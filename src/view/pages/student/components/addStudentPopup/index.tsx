
/**
 * 
 * Add Student component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

import {useStudentByIdQuery} from '@/api/student/student';
import AddStudentForm from './form/addStudentForm';
  
type AddStudentPopupProps = {
onClose: () => void;
studentId?: number | null;
};

const AddStudentPopup = ({onClose, studentId}: AddStudentPopupProps) => {
    const studentByIdQuery = useStudentByIdQuery(studentId);

    if ((studentId && !studentByIdQuery?.data)) return <Loader/>;
    return (
        <AddStudentForm
            onClose={onClose}
            data={studentByIdQuery.data}
        />
    );
};

export default AddStudentPopup;
  