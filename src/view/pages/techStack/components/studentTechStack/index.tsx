/**
 * 
 * Tech Stack page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {PaperLayout} from '@/view/molecules';

// CONTEXT IMPORT
import {UserContext} from '@/contexts/userContext';

// API IMPORT
import {useTechStackByStudentIdQuery} from '@/api/profile/profile';

// TECH STACK IMPORT
import StudentTechStackForm from './components/studentTechStackForm';

// TASK SCREEN COMPONENT DECLARE
const StudentTechStackPage = () => {
    // CONTEXT DECALRE
    const userContext = useContext(UserContext);

    // API DECLARE
    const techStackByStudentIdQuery = useTechStackByStudentIdQuery(userContext.id);
    
    if (!techStackByStudentIdQuery.data) return <Loader/>;
    
    return (
        <PaperLayout
                title="All Tech Stack"
                info="You can check whatever technology you completed"
                disablePaddingX
            >
                <StudentTechStackForm 
                    studentId={userContext.id} 
                    role={userContext.role}
                    data={techStackByStudentIdQuery.data}/>
        </PaperLayout>
        
    )
}

export default StudentTechStackPage;