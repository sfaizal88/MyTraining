/**
 * 
 * Report page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC VIEW IMPORT 
import {PaperLayout} from '@/view/molecules';

// COMPONENT
import StudentList from './studentList/studentList';

// REPORT SCREEN COMPONENT DECLARE
const ReportPage = () => {

    return (
        <PaperLayout
            title="All Report"
            info="Can view all the student reports"
        >
            <StudentList/>
        </PaperLayout>
    )
}

export default ReportPage;