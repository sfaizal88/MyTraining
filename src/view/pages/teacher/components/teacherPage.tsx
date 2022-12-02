/**
 * 
 * Teacher component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import TeacherList from './teacherList/teacherList';
import {useAddTeacherPopup} from './addTeacherPopup/hooks';


// TEACHER COMPONENT DECLARE
const TeacherPage = () => {
    // DECLARE HOOK CALL
    const addTeacherPopup = useAddTeacherPopup();

    return (
        <>
            <PaperLayout
                title="All Teacher"
                info="Can edit, delete, add teacher and view all teacher details"
                buttonLabel="Add new teacher"
                onAddClick={() => addTeacherPopup.show(null)}
            >
                <TeacherList onEdit={addTeacherPopup.show}/>
            </PaperLayout>
            {addTeacherPopup.child}
        </>
    )
}

export default TeacherPage;