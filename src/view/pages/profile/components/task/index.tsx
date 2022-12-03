/**
 * 
 * Task page component
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

// TASK SCREEN COMPONENT DECLARE
const Task = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);

    return (
        <Paper className={classes.profileContentLayout}>
            Task
        </Paper>
    )
}

export default Task;