/**
 * 
 * View Mentor component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useMentorByIdQuery} from '@/api/mentor/mentor';
import {useStudentOptionsQuery} from '@/api/student/student';

// FORM IMPORT
import ViewMentorForm from './form/viewMentorForm';
  
type ViewMentorPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewMentorPopup = ({onClose, id}: ViewMentorPopupProps) => {
    const mentorByIdQuery = useMentorByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || !mentorByIdQuery?.data) return <Loader/>;

    return (
        <ViewMentorForm
            onClose={onClose}
            data={mentorByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default ViewMentorPopup;
  