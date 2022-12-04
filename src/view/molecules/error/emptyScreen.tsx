/**
 * 
 * Empty message component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';
import {ReactElement} from 'react';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type EmptyScreenProps = {
    title: string;
    subtitle?: string;
    button?: ReactElement;
    icon?: ReactElement;
}

const EmptyScreen = ({
    title,
    subtitle,
    button,
    icon,
}: EmptyScreenProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.noRecordContainer}>
                {icon}
                <Box className={classes.title}>{title}</Box>
                <Box className={classes.subtitle}>{subtitle}</Box>
                {button}
            </Box>
        </Box>
    )
}

export default EmptyScreen;