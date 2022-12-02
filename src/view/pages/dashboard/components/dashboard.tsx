/**
 * 
 * Login component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import { Box } from '@mui/material';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

// GENERIC VIEW IMPORT 
import {Loader} from '@/view/atoms';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from '../styles';

// LOGINPAGE COMPONENT DECLARE
const DashboardPage = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();
    const navigate = useNavigate();

    // STATE DECLARE
    const [isLoading, setLoading] = useState(false);

    // IF API LOADS, TURN ON LOADER
    if (isLoading) return <Loader/>;

    return (
    <Box className={classes.pageContainer}>
        Dashboard page
    </Box>
    )
}

export default DashboardPage;