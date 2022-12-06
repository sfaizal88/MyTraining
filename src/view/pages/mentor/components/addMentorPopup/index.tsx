/**
 * 
 * Add Mentor component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useMentorByIdQuery} from '@/api/mentor/mentor';
import {useStudentOptionsQuery} from '@/api/student/student';

// MENTOR IMPORT
import AddMentorForm from './form/addMentorForm';
  
// PROPS TYPE
type AddMentorPopupProps = {
    onClose: () => void;
    id?: number | null;
};

// DEFAULT COMPONENT
const AddMentorPopup = ({onClose, id}: AddMentorPopupProps) => {
    // DECLARE API
    const mentorByIdQuery = useMentorByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    // CHECK LOADER
    if (!studentOptionsQuery.data || (id && !mentorByIdQuery?.data)) return <Loader/>;

    return (
        <AddMentorForm
            onClose={onClose}
            data={mentorByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default AddMentorPopup;
  