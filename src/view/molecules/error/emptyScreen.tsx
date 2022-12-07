/**
 * 
 * Empty message component
 * @author - NA 
 * @date - 3th December, 2022
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
    showButton?: boolean;
}

const EmptyScreen = ({
    title,
    subtitle,
    button,
    showButton =  true,
    icon,
}: EmptyScreenProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.noRecordContainer}>
                {icon}
                <Box className={classes.title}>{title}</Box>
                <Box className={classes.subtitle}>{subtitle}</Box>
                {showButton && button}
            </Box>
        </Box>
    )
}

export default EmptyScreen;