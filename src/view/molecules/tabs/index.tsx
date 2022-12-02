/**
 * 
 * Tabs component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
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
       <Box className={classes.paperLayout}>
           <Tabs 
            value={value} 
            onChange={handleChange}
            classes={{
                indicator: classes.indicator
              }}
            >
                {tabsLabel.map(tab => (
                    <Tab label={tab} className={classes.tab} key={tab}/>
                ))}
            </Tabs>
            {value === 0 && <Box className={classes.tabContainer}>{tabsComponent[0]}</Box>}
            {value === 1 && <Box className={classes.tabContainer}>{tabsComponent[1]}</Box>}
       </Box>
    )
}

export default TabContainer;