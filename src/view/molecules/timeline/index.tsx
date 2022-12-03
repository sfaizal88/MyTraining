/**
 * 
 * Timeline component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Typography, Box} from '@mui/material';
import {
    Timeline as MuiTimeline, 
    TimelineItem, 
    TimelineOppositeContent, 
    TimelineContent,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot,
} from '@mui/lab';
import {ArrowDownwardOutlined, DateRangeOutlined} from '@mui/icons-material';

// API IMPORT
import type {MileStoneGetItem} from '@/api/roadmap/roadmap';

// UTILS IMPORT
import {formatDateDisplay} from '@/utils/helper';

// STYLE IMPORT
import useStyles from './styles';

type TimelineProps = {
    mileStone: MileStoneGetItem[]
}
const Timeline = ({
    mileStone
}: TimelineProps) => {
    const classes = useStyles();

    return (
        <MuiTimeline position="alternate">
            {mileStone.map((item, index) => 
                <TimelineItem key={`roadmap-${index}`}>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    >
                    <Box className={classes.date}>
                        <DateRangeOutlined style={{fontSize: 24, marginRight: '8px'}}/> 
                        {formatDateDisplay(item.date)}
                    </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot>
                        <ArrowDownwardOutlined />
                    </TimelineDot>
                    {mileStone.length - 1 !== index && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Box component="span" className={classes.title}>
                        {item.title}
                    </Box>
                    <Box className={classes.content}>{item.description}</Box>
                    </TimelineContent>
                </TimelineItem>
            )}
        </MuiTimeline>
    )
}

export default Timeline;