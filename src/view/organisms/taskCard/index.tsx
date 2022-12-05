/**
 * 
 * Task Card item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Avatar, Box, AvatarGroup} from '@mui/material';
import {AlarmOnOutlined} from '@mui/icons-material';

// API
import type {TaskGetItem} from '@/api/task/task';
import type {StudentGetItem} from '@/api/student/student';

// GENERIC COMPONENT IMPORT 
import {Badge} from '@/view/atoms';
import {Options, TruncatedField} from '@/view/molecules';

// UTILS IMPORT 
import {findDuration} from '@/utils/helper';
import {TaskStatusType} from '@/utils/enum';
import {taskStatusDisplayMap} from '@/utils/constants';

// STYLE IMPORT 
import useStyles from './styles';

// COMPONENT PROPS
type TaskCardProps = TaskGetItem & {
  onEdit?: (id: number | null) => void;
  onDelete?: (id: number | null) => void;
  onView?: (id: number | null) => void;
  onStudentList: (id: number | null) => void;
  studentOptions: StudentGetItem[];
  showActions?: boolean;
  showView?: boolean;
  showStatus?: boolean;
};

const TaskCard = ({
  onEdit,
  onDelete,
  onView,
  onStudentList,
  studentOptions,
  showActions = false,
  showStatus = false,
  showView = false,
  ...props
}: TaskCardProps) => {
  // DECLARE STYLE
  const classes = useStyles();
  
  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);

  // RENDER HTML
  return (
      <Box className={classes.card} onClick={() => showView && onView?.(props.id)}>
          <Box className={classes.cardHeader}>
            {showStatus && <Box className={classes.cardBadge} justifyContent={'flex-end'}>
              <Badge
                status={props.status.toString()}
                statusDisplay={taskStatusDisplayMap[props.status]}
                statusToColor={{
                  [TaskStatusType.notStarted]: 'grey',
                  [TaskStatusType.started]: 'yellow',
                  [TaskStatusType.reviewPending]: 'red',
                  [TaskStatusType.reviewCompleted]: 'green',
                  [TaskStatusType.done]: 'green',
                }}
              />
            </Box>}
            <Box className={classes.cardTitle}>{props.title}</Box>
            {showActions && <Box className={classes.actionContainer}>
                <Options 
                itemsKey={['edit', 'delete']}
                itemsHandler={{
                    edit: () => onEdit?.(props.id),
                    delete: () => onDelete?.(props.id),
                }}/>
            </Box>}
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
                {props.students.map((item, index) => 
                  <Avatar key={item} alt={studentMap[item].name} sx={{ width: 24, height: 24, fontSize: 12, fontWeight: 600, bgcolor: '#027bb3'}}>{studentMap[item].name[0]}</Avatar>
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

export default TaskCard;
