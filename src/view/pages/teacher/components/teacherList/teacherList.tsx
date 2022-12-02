/**
 * 
 * Teacher list component
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
import {TeacherGetItem, useTeacherListQuery} from '@/api/teacher/teacher';

// TEACHER IMPORT
import TeacherListTitles from './teacherListTitles';
import TeacherListItem from './teacherListItem';
import {useDeleteTeacherPopup} from './hooks';
import {useViewTeacherPopup} from '../viewTeacherPopup/hooks';
import {useViewStudentListPopup} from '../viewStudentListPopup/hooks';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from '../../styles';

type TeacherListProps = {
    onEdit: (id: number | null) => void;
}

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 3, 2, 3, 1];

// TEACHER LIST COMPONENT DECLARE
const TeacherList = ({
    onEdit
}: TeacherListProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE API CALL
    const teacherListQuery = useTeacherListQuery();

    // DECLARE HOOK CALL
    const deleteTeacherPopup = useDeleteTeacherPopup();
    const viewTeacherPopup = useViewTeacherPopup();
    const viewStudentListPopup = useViewStudentListPopup();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    // IF API LOADS, TURN ON LOADER
    if (!teacherListQuery.data) return <Loader/>;

    return (
        <>
            <TeacherListTitles widths={widths}/>
            {teacherListQuery.data.length > 0 ? 
                teacherListQuery.data.map((item: TeacherGetItem) => (
                    <Box key={item.id}>
                        <TeacherListItem
                            {...item}
                            widths={widths}
                            onEdit={onEdit}
                            onDelete={deleteTeacherPopup.show}
                            onView={viewTeacherPopup.show}
                            onStudentList={viewStudentListPopup.show}
                        />
                    </Box>
            )) : (
                <EmptyScreen
                    title={'No Customer'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteTeacherPopup.child}
            {viewTeacherPopup.child}
            {viewStudentListPopup.child}
        </>
    )
}

export default TeacherList;