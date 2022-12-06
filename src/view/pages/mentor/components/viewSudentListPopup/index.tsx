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
import {useStudentListQuery} from '@/api/student/student';

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
    const studentListQuery = useStudentListQuery();

    // LOADER CHECK FOR API
    if (!studentListQuery.data || !mentorByIdQuery?.data) return <Loader/>;

    return (
        <ViewStudentListForm
            onClose={onClose}
            data={mentorByIdQuery.data}
            studentOptions={studentListQuery.data}
        />
    );
};

export default ViewStudentListPopup;
  