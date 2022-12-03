/**
 * 
 * Student list component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import { Box, GridSize } from '@mui/material';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';

// API
import {StudentGetItem, useStudentListQuery} from '@/api/student/student';

// STUDENT IMPORT
import StudentListTitles from './studentListTitles';
import StudentListItem from './studentListItem';

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 3, 3, 3];

// STUDENT LIST COMPONENT DECLARE
const StudentList = () => {

    // DECLARE API CALL
    const studentListQuery = useStudentListQuery();

    // IF API LOADS, TURN ON LOADER
    if (!studentListQuery.data) return <Loader/>;

    return (
        <>
            <StudentListTitles widths={widths}/>
            {studentListQuery.data.length > 0 ? 
                studentListQuery.data.map((item: StudentGetItem) => (
                    <Box key={item.id}>
                        <StudentListItem
                            {...item}
                            widths={widths}
                        />
                    </Box>
            )) : (
                <EmptyScreen
                    title={'No Student added'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
        </>
    )
}

export default StudentList;