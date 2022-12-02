/**
 * 
 * Add TechStack component
 * @author - NA 
 * @date - 3th December, 2022 faizal
 * 
 */
// API IMPORT
import {useTechStackByIdQuery} from '@/api/techStack/techStack';
import {useStudentOptionsQuery} from '@/api/student/student';
import AddTechStackForm from './components/addTechStackForm';

type AddTechStackPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddTechStackPopup = ({onClose, id}: AddTechStackPopupProps) => {
    const techStackByIdQuery = useTechStackByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || (id && !techStackByIdQuery?.data)) return null;

    return (
        <AddTechStackForm
            onClose={onClose}
            data={techStackByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default AddTechStackPopup;
  