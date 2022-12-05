/**
 * 
 * Mock Interview page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import { Box, Paper } from '@mui/material';
import {useContext, useState} from 'react';
import {VoiceOverOffOutlined} from '@mui/icons-material';

// GENERIC IMPORT 
import {Loader, AddButton} from '@/view/atoms';
import {EmptyScreen} from '@/view/molecules';
import {AssignTaskModal} from '@/view/organisms';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// API
import {MockInterviewGetItem} from '@/api/mockInterview/mockInterview';
import {useStudentListQuery} from '@/api/student/student';
import {useTeacherListQuery} from '@/api/teacher/teacher';

// MOCK INTERVIEW IMPORT COMPONENT
import MockInterviewCard from './components/list/mockInterviewCard';

// HOOK IMPORT
import {useProfileDetails} from '@/view/pages/profile/hook';
import {useViewMockInterviewPopup} from './components/viewMockInterviewPopup/hooks';
import {useDeleteMockInterviewPopup} from './components/list/hooks';
import {useViewStudentListPopup} from '@/view/pages/teacher/components/viewStudentListPopup/hooks';
import {useAddMockInterviewPopup} from './components/addMockInterviewPopup/hooks';

// STYLE IMPORT
import useStyles from '../../styles';

// ROADMAP LIST COMPONENT DECLARE
const MockInterview = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // STATE DECLARE
    const [isOpen, setOpen] = useState(false);

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const mockInterviewList = profileContext.mock_interview;
    const userId = profileContext.id;

    // DECLARE API CALL
    const studentListQuery = useStudentListQuery();
    const teacherListQuery = useTeacherListQuery();

    // DECLARE HOOK CALL
    const deleteMockInterviewPopup = useDeleteMockInterviewPopup();
    const viewStudentListPopup = useViewStudentListPopup();
    const addMockInterviewPopup = useAddMockInterviewPopup();
    const viewMockInterviewPopup = useViewMockInterviewPopup();
    const profileDetails = useProfileDetails();

    // IF API LOADS, TURN ON LOADER
    if (!studentListQuery.data || !teacherListQuery.data) return <Loader/>;

    return (
        <Paper className={classes.profileContentLayout}>
            {mockInterviewList.length > 0 ? 
            <Box mb={3} className={classes.profileContainer}>
                <Box className={classes.content}>
                    <AddButton 
                        customLabel='Create mock interview' 
                        onClick={() => addMockInterviewPopup.show(null)} 
                        type="button"
                        hide={profileDetails.isLoginUserStudent()}
                    />
                    
                    <Box className={classes.grid4} mt={3}>
                        {mockInterviewList.map((item: MockInterviewGetItem) => (  
                            <MockInterviewCard 
                                {...item}
                                key={item.id}
                                onStudentList={viewStudentListPopup.show}
                                studentOptions={studentListQuery.data}
                                teacherOptions={teacherListQuery.data}
                                showStatus
                                showEdit
                                showDelete
                                showView
                                onDelete={() => deleteMockInterviewPopup.show(item.id)}
                                onEdit={() => addMockInterviewPopup.show(item.id)}
                                onView={() => viewMockInterviewPopup.show(item.id)}
                            />
                    ))}
                    </Box>
                </Box>
            </Box> : (
                <EmptyScreen
                    title={'No Mock interview created'}
                    subtitle={!profileDetails.isLoginUserStudent() ? 'Create and assign new mock interview' : ''}
                    button={<AddButton customLabel='Create mock interview' onClick={() => setOpen(true)} type="button" hide={profileDetails.isLoginUserStudent()}/>}
                    icon={<VoiceOverOffOutlined style={{fontSize: 46}}/>}
                />
            )}
            {viewStudentListPopup.child}
            {addMockInterviewPopup.child}
            {deleteMockInterviewPopup.child}
            {viewMockInterviewPopup.child}
            {isOpen && <AssignTaskModal userId={userId} isOpen={isOpen} onClose={() => setOpen(false)}/>}
        </Paper>
    )
}

export default MockInterview;