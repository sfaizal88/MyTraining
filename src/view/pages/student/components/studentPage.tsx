/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import StudentList from './studentList/studentList';
import {useAddStudentPopup} from './addStudentPopup/hooks';


// LOGINPAGE COMPONENT DECLARE
const StudentPage = () => {
    // DECLARE HOOK CALL
    const addStudentPopup = useAddStudentPopup();

    return (
        <>
            <PaperLayout
                title="All Student"
                info="Can edit, delete, add candaite and view all student details"
                buttonLabel="Add new student"
                onAddClick={() => addStudentPopup.show(null)}
            >
                <StudentList onEdit={addStudentPopup.show}/>
            </PaperLayout>
            {addStudentPopup.child}
        </>
    )
}

export default StudentPage;