/**
 * 
 * Profile page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERCI IMPORT
import {useContext} from 'react';
import { Box } from '@mui/material';
import {useParams} from 'react-router-dom';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';
import {TabContainer} from '@/view/molecules';

// API IMPORT
import {useProfileByUserIdQuery} from '@/api/profile/profile';

// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';
import {UserContext} from '@/contexts/userContext';

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

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const userContext = useContext(UserContext);

    // DECLARE GENERIC VAR
    const {id} = useParams<{ id: string}>();
    const profileId = userContext.role == UserRoleType.student ?  userContext.id : Number(id);

    // API CALL
    const profileByUserIdQuery = useProfileByUserIdQuery(profileId);

    if (!profileByUserIdQuery.data) return <Loader/>;

    return (
        <ProfileContext.Provider value={profileByUserIdQuery.data}>
            <Box className={classes.root}>
                <ProfileHeader/>
                <TabContainer
                    tabsLabel={['Technology stack']}
                    tabsComponent={[<TechStack/>]}
                />
            </Box>
        </ProfileContext.Provider>
    )
}

export default ProfilePage;
// , 'Mock Interview', 'Task', 'Road Map',
// , <MockInterview/>, <Task/>, <Roadmap/>