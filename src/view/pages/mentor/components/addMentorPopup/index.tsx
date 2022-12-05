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
import AddMentorForm from './form/addMentorForm';
  
type AddMentorPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddMentorPopup = ({onClose, id}: AddMentorPopupProps) => {
    const mentorByIdQuery = useMentorByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

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
  