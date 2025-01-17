/**
 * 
 * Task details item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {Box, AvatarGroup, Typography, ImageList, ImageListItem} from '@mui/material';
import {AlarmOnOutlined} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {Badge, Avatar} from '@/view/atoms';

// API
import type {TaskGetItem} from '@/api/task/task';
import type {StudentGetItem} from '@/api/student/student';

// UTILS IMPORT 
import {findDuration} from '@/utils/helper';
import {TaskStatusType} from '@/utils/enum';
import {taskStatusDisplayMap} from '@/utils/constants';

// STYLE IMPORT 
import useStyles from './styles';

// COMPONENT PROPS
type TaskDetailsProps = {
  data: TaskGetItem;
  studentOptions: StudentGetItem[];
  onStudentList: (id: number | null) => void;
  showStatus?: boolean;
};

const TaskDetails = ({
  data, 
  studentOptions, 
  onStudentList,
  showStatus = false,
}: TaskDetailsProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur, i) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);

  // RENDER HTML
  return (
      <>
        <Typography className={classes.viewTitle} variant='h6'>
          {data.title}&nbsp;-&nbsp;
          <Box component={'span'} className={classes.viewSubtitle} mr={1}>{data.type}</Box>
          {showStatus && <Badge
              status={data.status.toString()}
              statusDisplay={taskStatusDisplayMap[data.status]}
              statusToColor={{
                [TaskStatusType.notStarted]: 'grey',
                [TaskStatusType.started]: 'yellow',
                [TaskStatusType.reviewPending]: 'red',
                [TaskStatusType.reviewCompleted]: 'green',
                [TaskStatusType.done]: 'green',
              }}
            />}
        </Typography>
        <Box className={classes.viewDetails}>{data.details}</Box>
        <Box className={classes.viewFooter}>
            <Box
              display='inline-flex' 
              alignItems={'center'}
              flex={1}
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                onStudentList(data.id || null);
              }}>
              <AvatarGroup max={4}>
                {data.students.map(item => 
                  <Avatar key={item} size="xs" label={studentMap[item].name[0]}/>
                )}
              </AvatarGroup>
              <Box component={'span'} className={classes.link} ml={1}>View all students</Box>
            </Box>
            <Box className={classes.viewDuration}>
              <AlarmOnOutlined style={{fontSize: 24, marginRight: '4px'}}/>
              {data.duration.slice(0, -1)} {findDuration(data.duration || '')} timeline</Box>
          </Box>
          <ImageList cols={2}>
              {data.images.map((item, index) => (
                <ImageListItem key={`task-image-${index}`}>
                  <img
                    src={`${item}?h=300&auto=format`}
                    srcSet={`${item}?h=300&auto=format&dpr=2 2x`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
      </>
  )
}

export default TaskDetails;
