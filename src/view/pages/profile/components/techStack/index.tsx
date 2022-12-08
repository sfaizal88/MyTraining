/**
 * 
 * Tech Stack page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';
import { Paper} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {Loader} from '@/view/atoms';

// API IMPORT
import {useTechStackByStudentIdQuery} from '@/api/profile/profile';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';
import {UserContext} from '@/contexts/userContext';

// TECH STACK IMPORT
import StudentTechStackForm from '@/view/pages/techStack/components/studentTechStack/components/studentTechStackForm';

// STYLE IMPORT
import useStyles from '../../styles';

// TASK SCREEN COMPONENT DECLARE
const TechStack = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const userContext = useContext(UserContext);
    console.log("userContext: ", userContext);
    // API DECLARE
    const techStackByStudentIdQuery = useTechStackByStudentIdQuery(profileContext.id);

    if (!techStackByStudentIdQuery.data) return <Loader/>;

    return (
        <Paper className={classes.profileContentLayout}>
            <StudentTechStackForm 
                studentId={profileContext.id} 
                role={userContext.role}
                data={techStackByStudentIdQuery.data}/>
        </Paper>
    )
}

export default TechStack;