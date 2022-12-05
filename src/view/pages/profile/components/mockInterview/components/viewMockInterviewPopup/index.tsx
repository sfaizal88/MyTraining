/**
 * 
 * Add Mock Interview component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// API IMPORT
import {useMockInterviewByIdQuery} from '@/api/mockInterview/mockInterview';

// MOCK INTERVIEW IMPORT
import ViewMockInterviewForm from './form/viewMockInterviewForm';
  
type ViewMockInterviewPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const ViewMockInterviewPopup = ({onClose, id}: ViewMockInterviewPopupProps) => {
    const mockInterviewByIdQuery = useMockInterviewByIdQuery(id);

    if (!mockInterviewByIdQuery?.data) return null;

    return (
        <ViewMockInterviewForm
            onClose={onClose}
            data={mockInterviewByIdQuery.data}
        />
    );
};

export default ViewMockInterviewPopup;
  