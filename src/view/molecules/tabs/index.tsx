/**
 * 
 * Tabs component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import clsx from 'clsx';
import {useState, ChangeEvent, ReactNode} from 'react';
import {Box, Tab, Tabs} from '@mui/material';

// STYLE IMPORT
import useStyles from './styles';

// COMPONENT PROPS
type TabContainerProps = {
    tabsLabel: string[],
    tabsComponent: ReactNode[],
}

const TabContainer = ({
    tabsLabel,
    tabsComponent,
}: TabContainerProps) => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    function handleChange(event: ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
    }

    return (
       <Box className={classes.root}>
           <Tabs 
            value={value} 
            onChange={handleChange}
            className={classes.tabContainer}
            classes={{
                indicator: classes.indicator,
              }}
            >
                {tabsLabel.map((tab) => (
                    <Tab label={<Box component={'span'} className={classes.tabLabel}>{tab}</Box>} key={tab}/>
                ))}
            </Tabs>
            {tabsComponent.map((_, index) => 
                <Box key={`tab-container-${index}`} className={clsx(classes.tabContentContainer, value !== index && classes.hidden)}>{tabsComponent[index]}</Box>
            )}
       </Box>
    )
}

export default TabContainer;