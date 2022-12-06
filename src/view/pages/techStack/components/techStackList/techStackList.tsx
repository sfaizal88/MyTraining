/**
 * 
 * TechStack list component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { Box, GridSize } from '@mui/material';
import {PersonOffOutlined} from '@mui/icons-material';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';

// API
import {TechStackGetItem, useTechStackListQuery} from '@/api/techStack/techStack';

// ROADMAP IMPORT
import TechStackListTitles from './techStackListTitles';
import TechStackListItem from './techStackListItem';
import {useDeleteTechStackPopup} from './hooks';
import {useViewTechStackPopup} from '../viewTechStackPopup/hooks';
import {useViewStudentListPopup} from '@/view/pages/student/components/viewSudentListPopup/hooks';

type TechStackListProps = {
    onEdit: (id: number | null) => void;
}

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [5, 3, 3, 1];

// ROADMAP LIST COMPONENT DECLARE
const TechStackList = ({
    onEdit
}: TechStackListProps) => {
    // DECLARE API CALL
    const techStackListQuery = useTechStackListQuery();

    // DECLARE HOOK CALL
    const deleteTechStackPopup = useDeleteTechStackPopup();
    const viewTechStackPopup = useViewTechStackPopup();
    const viewStudentListPopup = useViewStudentListPopup();

    // IF API LOADS, TURN ON LOADER
    if (!techStackListQuery.data) return <Loader/>;

    return (
        <>
            <TechStackListTitles widths={widths}/>
            {techStackListQuery.data.length > 0 ? 
                techStackListQuery.data.map((item: TechStackGetItem) => (
                    <Box key={item.id}>
                        <TechStackListItem
                            {...item}
                            widths={widths}
                            onEdit={onEdit}
                            onDelete={deleteTechStackPopup.show}
                            onView={viewTechStackPopup.show}
                            onStudentList={viewStudentListPopup.show}
                        />
                    </Box>
            )) : (
                <EmptyScreen
                    title={'No TechStack'}
                    icon={<PersonOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {deleteTechStackPopup.child}
            {viewTechStackPopup.child}
            {viewStudentListPopup.child}
        </>
    )
}

export default TechStackList;