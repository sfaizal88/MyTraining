
/**
 * 
 * View student component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

import {useStudentByIdQuery} from '@/api/student/student';
import ViewStudentForm from './form/viewStudentForm';
  
type ViewStudentPopupProps = {
    onClose: () => void;
    studentId?: number | null;
};

const ViewStudentPopup = ({onClose, studentId}: ViewStudentPopupProps) => {
    const studentByIdQuery = useStudentByIdQuery(studentId);

    if ((studentId && !studentByIdQuery?.data)) return <Loader/>;

    return (
        <ViewStudentForm
            onClose={onClose}
            data={studentByIdQuery.data}
        />
    );
};

export default ViewStudentPopup;
  