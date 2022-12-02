/**
 * 
 * View Roadmap component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import {useRoadmapByIdQuery} from '@/api/roadmap/roadmap';
import {useStudentOptionsQuery} from '@/api/student/student';

// FORM IMPORT
import ViewRoadmapForm from './form/viewRoadmapForm';
  
type ViewRoadmapPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewRoadmapPopup = ({onClose, id}: ViewRoadmapPopupProps) => {
    const roadmapByIdQuery = useRoadmapByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || (id && !roadmapByIdQuery?.data)) return null;
    return (
        <ViewRoadmapForm
            onClose={onClose}
            data={roadmapByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default ViewRoadmapPopup;
  