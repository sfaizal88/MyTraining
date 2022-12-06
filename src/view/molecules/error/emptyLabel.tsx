/**
 * 
 * Error label component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type EmptyLabelProps = {
    label: string;
}

const EmptyLabel = ({
    label,
}: EmptyLabelProps) => {
    const classes = useStyles();
    return (<>{label && <Box className={classes.errorLabel}>{label}</Box>}</>)
}

export default EmptyLabel;