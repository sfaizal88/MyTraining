/**
 * 
 * Roadmap component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import RoadList from './roadmapList/roadmapList';
import {useAddRoadmapPopup} from './addRoadmapPopup/hooks';

// ROADMAP COMPONENT DECLARE
const RoadmapPage = () => {
    // DECLARE HOOK CALL
    const addRoadmapPopup = useAddRoadmapPopup();

    return (
        <>
            <PaperLayout
                title="All Roadmap"
                info="Can edit, delete, add roadmap and view all roadmap details"
                buttonLabel="Add new roadmap"
                onAddClick={() => addRoadmapPopup.show(null)}
            >
                <RoadList onEdit={addRoadmapPopup.show}/>
            </PaperLayout>
            {addRoadmapPopup.child}
        </>
    )
}

export default RoadmapPage;