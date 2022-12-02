/**
 * 
 * Add Roadmap component
 * @author - NA 
 * @date - 3th December, 2022 faizal
 * 
 */
// API IMPORT
import {useRoadmapByIdQuery} from '@/api/roadmap/roadmap';
import {useStudentOptionsQuery} from '@/api/student/student';
import AddRoadmapForm from './components/addRoadmapForm';

type AddRoadmapPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddRoadmapPopup = ({onClose, id}: AddRoadmapPopupProps) => {
    const roadmapByIdQuery = useRoadmapByIdQuery(id);
    const studentOptionsQuery = useStudentOptionsQuery();

    if (!studentOptionsQuery.data || (id && !roadmapByIdQuery?.data)) return null;

    return (
        <AddRoadmapForm
            onClose={onClose}
            data={roadmapByIdQuery.data}
            studentOptions={studentOptionsQuery.data}
        />
    );
};

export default AddRoadmapPopup;
  