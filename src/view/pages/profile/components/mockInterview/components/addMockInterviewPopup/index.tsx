import {useMockInterviewByIdQuery} from '@/api/mockInterview/mockInterview';
import AddMockInterviewForm from './form/addMockInterviewForm';
  
type AddMockInterviewPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddMockInterviewPopup = ({onClose, id}: AddMockInterviewPopupProps) => {
    const mockInterviewByIdQuery = useMockInterviewByIdQuery(id);

    if ((id && !mockInterviewByIdQuery?.data)) return null;
    return (
        <AddMockInterviewForm
            onClose={onClose}
            data={mockInterviewByIdQuery.data}
        />
    );
};

export default AddMockInterviewPopup;
  