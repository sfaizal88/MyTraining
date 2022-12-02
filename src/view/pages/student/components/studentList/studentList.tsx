/**
 * 
 * Student list component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import { Box, GridSize } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';

// API
import {StudentGetItem, useStudentListQuery} from '@/api/student/student';

// STUDENT IMPORT
import StudentListTitles from './studentListTitles';
import StudentListItem from './studentListItem';
import {useDeleteStudentPopup} from './hooks';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from '../../styles';

type StudentListProps = {
    onEdit: (studentId: number | null) => void;
}

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 3, 2, 3, 1];

// STUDENT LIST COMPONENT DECLARE
const StudentList = ({
    onEdit
}: StudentListProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE API CALL
    const studentListQuery = useStudentListQuery();

    // DECLARE HOOK CALL
    const deleteStudentPopup = useDeleteStudentPopup();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

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
                            onEdit={onEdit}
                            onDelete={deleteStudentPopup.show}
                        />
                    </Box>
            )) : (
                <EmptyScreen
                    title={'No Customer'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteStudentPopup.child}
        </>
    )
}

export default StudentList;