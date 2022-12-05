/**
 * 
 * Mentor list component
 * @author - NA 
 * @date - 3th December, 2022
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
import {MentorGetItem, useMentorListQuery} from '@/api/mentor/mentor';

// MENTOR IMPORT
import MentorListTitles from './mentorListTitles';
import MentorListItem from './mentorListItem';
import {useDeleteMentorPopup} from './hooks';
import {useViewMentorPopup} from '../viewMentorPopup/hooks';
import {useViewStudentListPopup} from '../viewSudentListPopup/hooks';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from '../../styles';

type MentorListProps = {
    onEdit: (id: number | null) => void;
}

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 3, 2, 3, 1];

// MENTOR LIST COMPONENT DECLARE
const MentorList = ({
    onEdit
}: MentorListProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE API CALL
    const mentorListQuery = useMentorListQuery();

    // DECLARE HOOK CALL
    const deleteMentorPopup = useDeleteMentorPopup();
    const viewMentorPopup = useViewMentorPopup();
    const viewStudentListPopup = useViewStudentListPopup();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    // IF API LOADS, TURN ON LOADER
    if (!mentorListQuery.data) return <Loader/>;

    return (
        <>
            <MentorListTitles widths={widths}/>
            {mentorListQuery.data.length > 0 ? 
                mentorListQuery.data.map((item: MentorGetItem) => (
                    <Box key={item.id}>
                        <MentorListItem
                            {...item}
                            widths={widths}
                            onEdit={onEdit}
                            onDelete={deleteMentorPopup.show}
                            onView={viewMentorPopup.show}
                            onStudentList={viewStudentListPopup.show}
                        />
                    </Box>
            )) : (
                <EmptyScreen
                    title={'No Customer'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteMentorPopup.child}
            {viewMentorPopup.child}
            {viewStudentListPopup.child}
        </>
    )
}

export default MentorList;