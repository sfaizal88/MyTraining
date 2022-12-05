/**
 * 
 * View TechStack component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useTechStackByIdQuery} from '@/api/techStack/techStack';
import {useStudentOptionsQuery} from '@/api/student/student';

// FORM IMPORT
import ViewTechStackForm from './form/viewTechStackForm';
  
type ViewTechStackPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewTechStackPopup = ({onClose, id}: ViewTechStackPopupProps) => {
    const techStackByIdQuery = useTechStackByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || !techStackByIdQuery?.data) return <Loader/>;
    
    return (
        <ViewTechStackForm
            onClose={onClose}
            data={techStackByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default ViewTechStackPopup;
  