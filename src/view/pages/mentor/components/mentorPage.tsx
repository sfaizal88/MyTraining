/**
 * 
 * Mentor component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import MentorList from './mentorList/mentorList';
import {useAddMentorPopup} from './addMentorPopup/hooks';


// MENTOR COMPONENT DECLARE
const MentorPage = () => {
    // DECLARE HOOK CALL
    const addMentorPopup = useAddMentorPopup();

    return (
        <>
            <PaperLayout
                title="All Mentor"
                info="Can edit, delete, add mentor and view all mentor details"
                buttonLabel="Add new mentor"
                onAddClick={() => addMentorPopup.show(null)}
            >
                <MentorList onEdit={addMentorPopup.show}/>
            </PaperLayout>
            {addMentorPopup.child}
        </>
    )
}

export default MentorPage;