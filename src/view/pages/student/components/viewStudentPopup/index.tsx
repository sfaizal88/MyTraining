/**
 * 
 * View student component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useStudentByIdQuery} from '@/api/student/student';

// STUDENT IMPORT
import ViewStudentForm from './form/viewStudentForm';
  
// PROPS TYPE
type ViewStudentPopupProps = {
    onClose: () => void;
    id: number;
};

// DEFAULT COMPONENT
const ViewStudentPopup = ({onClose, id}: ViewStudentPopupProps) => {

    // DECLARE API
    const studentByIdQuery = useStudentByIdQuery(id);

    // LOADER CHECKER
    if (!studentByIdQuery?.data) return <Loader/>;

    return (
        <ViewStudentForm
            onClose={onClose}
            data={studentByIdQuery.data}
        />
    );
};

export default ViewStudentPopup;
  