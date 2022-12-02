/**
 * 
 * Paper layout component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {PropsWithChildren, ReactNode} from 'react';
import {Box} from '@mui/material';
import {ControlPointOutlined} from '@mui/icons-material';

// GENERIC COMPONENT
import {FormAction} from '@/view/molecules';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type PaperLayoutProps = {
    title: string;
    info: string;
    buttonLabel?: string;
    onAddClick?: () => void;
    onAddChild?: ReactNode;
}

const PaperLayout = ({
    title,
    info,
    buttonLabel,
    onAddClick,
    onAddChild,
    children,
}: PropsWithChildren<PaperLayoutProps>) => {
    const classes = useStyles();
    return (
        <Box className={classes.paperLayoutWrapper}>
            <Box className={classes.paperLayoutContainer} >
                <Box className={classes.header}>
                    <Box className={classes.title}>{title}</Box>
                    <Box className={classes.info}>{info}</Box>
                </Box>
                {buttonLabel && (
                        <Box width={250} textAlign={'right'}>
                            {onAddChild ? (onAddChild): (
                                <FormAction
                                showSubmit
                                submitBtnType={'button'}
                                submitLabel={buttonLabel}
                                onSubmit={onAddClick}
                                submitIcon={<ControlPointOutlined className={classes.plusIcon}/>}
                            />
                            )}
                        </Box>
                )}
            </Box>
            {children}
        </Box>
    )
}

export default PaperLayout;