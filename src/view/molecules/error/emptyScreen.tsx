/**
 * 
 * Empty message component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Typography} from '@mui/material';
import {ReactElement} from 'react';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type EmptyScreenProps = {
    title: string;
    icon?: ReactElement;
}

const EmptyScreen = ({
    title,
    icon,
}: EmptyScreenProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.noRecordContainer}>
            {icon}
            <Typography variant="h4" className={classes.title}>{title}</Typography>
        </Box>
    )
}

export default EmptyScreen;