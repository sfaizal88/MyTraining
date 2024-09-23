/**
 * 
 * Add TechStack component
 * @author - NA 
 * @date - 3th December, 2022 faizal
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useTechStackByIdQuery} from '@/api/techStack/techStack';
import {useAllStudentOptionsAssignedToMentorQuery} from '@/api/student/student';

// TECH STACK IMPORT
import AddTechStackForm from './components/addTechStackForm';

// TYPE PROPS
type AddTechStackPopupProps = {
    onClose: () => void;
    id?: number | null;
};

// DEFAULT COMPONENT
const AddTechStackPopup = ({onClose, id}: AddTechStackPopupProps) => {
    // DECLARE API
    const techStackByIdQuery = useTechStackByIdQuery(id);
    const allStudentAssignedToMentorQuery = useAllStudentOptionsAssignedToMentorQuery();

    // LOADER
    if (!allStudentAssignedToMentorQuery.data || (id && !techStackByIdQuery?.data)) return <Loader/>;

    return (
        <AddTechStackForm
            onClose={onClose}
            data={techStackByIdQuery.data}
            studentOptions={allStudentAssignedToMentorQuery.data}
        />
    );
};

export default AddTechStackPopup;
  