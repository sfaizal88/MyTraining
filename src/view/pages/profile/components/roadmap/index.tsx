/**
 * 
 * Roadmap page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useContext} from 'react';
import { Paper } from '@mui/material';

// GENERIC IMPORT 
import {Timeline} from '@/view/molecules';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// STYLE IMPORT
import useStyles from '../../styles';

// ROADMAP SCREEN COMPONENT DECLARE
const Roadmap = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);

    return (
        <Paper className={classes.profileContentLayout}>
            <Timeline mileStone={profileContext.roadmap.mile_stone}/>
        </Paper>
    )
}

export default Roadmap;