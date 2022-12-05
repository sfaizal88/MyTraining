/**
 * 
 * View Student list component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useMentorByIdQuery} from '@/api/mentor/mentor';
import {useStudentListQuery} from '@/api/student/student';
import ViewStudentListForm from './components/viewStudentListForm';
  
type ViewStudentListPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewStudentListPopup = ({onClose, id}: ViewStudentListPopupProps) => {
    const mentorByIdQuery = useMentorByIdQuery(id);
    const studentListQuery = useStudentListQuery();

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
  