/**
 * 
 * Profile page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERCI IMPORT
import { Box } from '@mui/material';
import {useParams} from 'react-router-dom';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {TabContainer} from '@/view/molecules';

// API IMPORT
import {useProfileByUserIdQuery} from '@/api/profile/profile';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// PROFILE IMPORT
import ProfileHeader from './components/profileHeader';
import Roadmap from './components/roadmap';
import TechStack from './components/techStack';
import MockInterview from './components/mockInterview';
import Task from './components/task';

// STYLE IMPORT
import useStyles from './styles';

// REPORT SCREEN COMPONENT DECLARE
const ProfilePage = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE GENERIC VAR
    const {id} = useParams<{ id: string}>();

    // API CALL
    const profileByUserIdQuery = useProfileByUserIdQuery(Number(id));

    if (!profileByUserIdQuery.data) return <Loader/>;

    return (
        <ProfileContext.Provider value={profileByUserIdQuery.data}>
            <Box className={classes.root}>
                <ProfileHeader/>
                <TabContainer
                    tabsLabel={['Technology stack', 'Mock Interview', 'Task', 'Road Map',]}
                    tabsComponent={[<TechStack/>, <MockInterview/>, <Task/>, <Roadmap/>]}
                />
            </Box>
        </ProfileContext.Provider>
    )
}

export default ProfilePage;