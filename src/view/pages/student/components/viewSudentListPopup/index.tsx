/**
 * 
 * View Student list component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useStudentByIdsQuery} from '@/api/student/student';

// MENTOR IMPORT
import ViewStudentListForm from './components/viewStudentListForm';
  
// PROPS TYPE
type ViewStudentListPopupProps = {
    onClose: () => void;
    ids: number[];
};

// DEFAULT COMPONENT
const ViewStudentListPopup = ({onClose, ids}: ViewStudentListPopupProps) => {

    // DECLARE API
    const studentByIdsQuery = useStudentByIdsQuery(ids);

    // LOADER CHECK FOR API
    if (!studentByIdsQuery.data) return <Loader/>;

    return (
        <ViewStudentListForm
            onClose={onClose}
            data={studentByIdsQuery.data}
        />
    );
};

export default ViewStudentListPopup;
  