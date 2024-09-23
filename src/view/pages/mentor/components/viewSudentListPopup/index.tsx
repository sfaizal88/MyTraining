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
import {useMentorByIdQuery} from '@/api/mentor/mentor';

// MENTOR IMPORT
import ViewStudentListForm from './components/viewStudentListForm';
  
// PROPS TYPE
type ViewStudentListPopupProps = {
    onClose: () => void;
    id?: number | null;
};

// DEFAULT COMPONENT
const ViewStudentListPopup = ({onClose, id}: ViewStudentListPopupProps) => {

    // DECLARE API
    const mentorByIdQuery = useMentorByIdQuery(id);

    // LOADER CHECK FOR API
    if (!mentorByIdQuery?.data) return <Loader/>;

    return (
        <ViewStudentListForm
            onClose={onClose}
            data={mentorByIdQuery.data}
        />
    );
};

export default ViewStudentListPopup;
  