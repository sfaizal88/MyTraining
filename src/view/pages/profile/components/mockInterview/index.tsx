/**
 * 
 * Mock Interview page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';
import { Paper } from '@mui/material';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// STYLE IMPORT
import useStyles from '../../styles';

// MOCK INTERVIEW SCREEN COMPONENT DECLARE
const MockInterview = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);

    return (
        <Paper className={classes.profileContentLayout}>
            Mock Interview
        </Paper>
    )
}

export default MockInterview;