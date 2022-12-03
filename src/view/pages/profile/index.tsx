/**
 * 
 * Profile page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERCI IMPORT
import {useParams} from 'react-router-dom';

// GENERIC VIEW IMPORT 
import {PaperLayout, TabContainer} from '@/view/molecules';

// PROFILE IMPORT
import Profile from './components/profile';
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

    return (
        <TabContainer
            tabsLabel={['Profile', 'Technology stack', 'Mock Interview', 'Task', 'Road Map',]}
            tabsComponent={[<Profile/>, <TechStack/>, <MockInterview/>, <Task/>, <Roadmap userId={Number(id)}/>]}
        />
    )
}

export default ProfilePage;