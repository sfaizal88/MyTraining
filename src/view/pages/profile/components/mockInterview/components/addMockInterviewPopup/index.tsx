/**
 * 
 * View Mentor component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Loader} from '@/view/atoms';

import {useMockInterviewByIdQuery} from '@/api/mockInterview/mockInterview';
import AddMockInterviewForm from './form/addMockInterviewForm';
  
type AddMockInterviewPopupProps = {
    onClose: () => void;
    id?: number | null;
};

const AddMockInterviewPopup = ({onClose, id}: AddMockInterviewPopupProps) => {
    const mockInterviewByIdQuery = useMockInterviewByIdQuery(id);

    if ((id && !mockInterviewByIdQuery?.data)) return <Loader/>;
    return (
        <AddMockInterviewForm
            onClose={onClose}
            data={mockInterviewByIdQuery.data}
        />
    );
};

export default AddMockInterviewPopup;
  