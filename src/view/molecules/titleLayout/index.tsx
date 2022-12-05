/**
 * 
 * Title layout component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {ReactElement} from 'react';
import {Box} from '@mui/material';
import {ControlPointOutlined} from '@mui/icons-material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type TitleLayoutProps = {
    title: string;
    info: string;
    rightChild: ReactElement
}

const TitleLayout = ({
    title,
    info,
    rightChild,
}: TitleLayoutProps) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} mb={2}>
            <Box flex={1} className={classes.titleContainer}>
                {title}
                <Box component={'span'} className={classes.info}>-&nbsp;{info}</Box>
            </Box>
            <Box className={classes.rightChild}>
                {rightChild}
            </Box>
        </Box>
    )
}

export default TitleLayout;