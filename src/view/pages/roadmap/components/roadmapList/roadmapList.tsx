/**
 * 
 * Roadmap list component
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
import {RoadmapGetItem, useRoadmapListQuery} from '@/api/roadmap/roadmap';

// ROADMAP IMPORT
import RoadmapListTitles from './roadmapListTitles';
import RoadmapListItem from './roadmapListItem';
import {useDeleteRoadmapPopup} from './hooks';
import {useViewRoadmapPopup} from '../viewRoadmapPopup/hooks';
import {useViewStudentListPopup} from '@/view/pages/mentor/components/viewSudentListPopup/hooks';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from '../../styles';

type RoadmapListProps = {
    onEdit: (id: number | null) => void;
}

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [5, 3, 3, 1];

// ROADMAP LIST COMPONENT DECLARE
const RoadmapList = ({
    onEdit
}: RoadmapListProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE API CALL
    const roadmapListQuery = useRoadmapListQuery();

    // DECLARE HOOK CALL
    const deleteRoadmapPopup = useDeleteRoadmapPopup();
    const viewRoadmapPopup = useViewRoadmapPopup();
    const viewStudentListPopup = useViewStudentListPopup();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    // IF API LOADS, TURN ON LOADER
    if (!roadmapListQuery.data) return <Loader/>;

    return (
        <>
            <RoadmapListTitles widths={widths}/>
            {roadmapListQuery.data.length > 0 ? 
                roadmapListQuery.data.map((item: RoadmapGetItem) => (
                    <Box key={item.id}>
                        <RoadmapListItem
                            {...item}
                            widths={widths}
                            onEdit={onEdit}
                            onDelete={deleteRoadmapPopup.show}
                            onView={viewRoadmapPopup.show}
                            onStudentList={viewStudentListPopup.show}
                        />
                    </Box>
            )) : (
                <EmptyScreen
                    title={'No Roadmap'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteRoadmapPopup.child}
            {viewRoadmapPopup.child}
            {viewStudentListPopup.child}
        </>
    )
}

export default RoadmapList;