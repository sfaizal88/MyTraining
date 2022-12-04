/**
 * 
 * Task list item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Avatar, Box, AvatarGroup} from '@mui/material';
import {AlarmOnOutlined} from '@mui/icons-material';
import {Dispatch, SetStateAction} from 'react';
import {generatePath, Link} from 'react-router-dom';

// API
import type {TaskGetItem} from '@/api/task/task';
import type {StudentGetItem} from '@/api/student/student';

// GENERIC COMPONENT IMPORT 
import {Options, TruncatedField} from '@/view/molecules';

// UTILS IMPORT 
import {findDuration} from '@/utils/helper';

// STYLE IMPORT 
import useStyles from './styles';

// COMPONENT PROPS
type TaskListCardProps = TaskGetItem & {
  onEdit: (id: number | null) => void;
  onDelete: (id: number | null) => void;
  onView: (id: number | null) => void;
  onStudentList: (id: number | null) => void;
  studentOptions: StudentGetItem[];
};

const TaskListCard = ({
  onEdit,
  onDelete,
  onView,
  onStudentList,
  studentOptions,
  ...props
}: TaskListCardProps) => {
  // DECLARE STYLE
  const classes = useStyles();
  
  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);

  // RENDER HTML
  return (
    <Box className={classes.card} onClick={() => {
        onView(props.id);
      }}>
        <Box className={classes.cardHeader}>
          <Box className={classes.cardTitle}>{props.title}</Box>
          <Box className={classes.actionContainer}>
          <Options 
            itemsKey={['edit', 'delete']}
            itemsHandler={{
              edit: () => onEdit(props.id),
              delete: () => onDelete(props.id),
            }}/>
        </Box>
        </Box>
        <Box className={classes.cardSubtitle}>{props.type}</Box>
        <Box className={classes.cardDetails}><TruncatedField value={props.details} fieldLength={100}/> 
        <Box className={classes.link} component='span'>View more</Box></Box>
        
        <Box className={classes.cardFooter}>
          <Box className={classes.link} 
            display='inline-flex' 
            flex={1}
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              onStudentList(props.id);
            }}>
            <AvatarGroup max={4}>
              {props.students.map(item => 
                <Avatar alt={studentMap[item].name} sx={{ width: 24, height: 24, fontSize: 12, fontWeight: 600, bgcolor: '#027bb3'}}>{studentMap[item].name[0]}</Avatar>
              )}
            </AvatarGroup>
          </Box>
          <Box className={classes.cardDuration}>
            <AlarmOnOutlined style={{fontSize: 24, marginRight: '4px'}}/>
            {props.duration.slice(0, -1)} {findDuration(props.duration)}</Box>
        </Box>
    </Box>
  )
}

export default TaskListCard;
