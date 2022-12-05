/**
 * 
 * Add Mock Interview component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

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

    if (!mockInterviewByIdQuery?.data) return <Loader/>;

    return (
        <ViewMockInterviewForm
            onClose={onClose}
            data={mockInterviewByIdQuery.data}
        />
    );
};

export default ViewMockInterviewPopup;
  