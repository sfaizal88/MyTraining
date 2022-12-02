/**
 * 
 * TechStack component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import RoadList from './techStackList/techStackList';
import {useAddTechStackPopup} from './addTechStackPopup/hooks';

// TECHSTACK COMPONENT DECLARE
const TechStackPage = () => {
    // DECLARE HOOK CALL
    const addTechStackPopup = useAddTechStackPopup();

    return (
        <>
            <PaperLayout
                title="All Technology"
                info="Can edit, delete, add technology and view all technology details"
                buttonLabel="Add new technology"
                onAddClick={() => addTechStackPopup.show(null)}
            >
                <RoadList onEdit={addTechStackPopup.show}/>
            </PaperLayout>
            {addTechStackPopup.child}
        </>
    )
}

export default TechStackPage;