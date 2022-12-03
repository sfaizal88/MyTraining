/**
 * 
 * Task component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import RoadList from './taskList/taskList';
import {useAddTaskPopup} from './addTaskPopup/hooks';

// TECHSTACK COMPONENT DECLARE
const TaskPage = () => {
    // DECLARE HOOK CALL
    const addTaskPopup = useAddTaskPopup();

    return (
        <>
            <PaperLayout
                title="All Task"
                info="Can edit, delete, add task and view all task details"
                buttonLabel="Add new task"
                onAddClick={() => addTaskPopup.show(null)}
            >
                <RoadList onEdit={addTaskPopup.show}/>
            </PaperLayout>
            {addTaskPopup.child}
        </>
    )
}

export default TaskPage;