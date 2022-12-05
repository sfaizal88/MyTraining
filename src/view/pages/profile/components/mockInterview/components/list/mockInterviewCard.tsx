/**
 * 
 * Task Card item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import compact from 'lodash/compact';
import {Box} from '@mui/material';
import {AlarmOnOutlined} from '@mui/icons-material';
import {Person4, Person} from '@mui/icons-material';

// API
import type {MockInterviewGetItem} from '@/api/mockInterview/mockInterview';
import type {StudentGetItem} from '@/api/student/student';
import type {TeacherGetItem} from '@/api/teacher/teacher';

// GENERIC COMPONENT IMPORT 
import {Badge} from '@/view/atoms';
import {Options, TruncatedField} from '@/view/molecules';

// UTILS IMPORT 
import {formatDateDisplay} from '@/utils/helper';
import {MockInterviewStatusType} from '@/utils/enum';
import {mockInterviewStatusDisplayMap} from '@/utils/constants';

// STYLE IMPORT 
import useStyles from './styles';

// COMPONENT PROPS
type MockInterviewCardProps = MockInterviewGetItem & {
  onEdit?: (id: number | null) => void;
  onDelete?: (id: number | null) => void;
  onView?: (id: number | null) => void;
  onStudentList: (id: number | null) => void;
  studentOptions: StudentGetItem[];
  teacherOptions: TeacherGetItem[];
  showEdit?: boolean;
  showDelete?: boolean;
  showView?: boolean;
  showStatus?: boolean;
};

const MockInterviewCard = ({
  onEdit,
  onDelete,
  onView,
  onStudentList,
  studentOptions,
  teacherOptions,
  showEdit = false,
  showDelete = false,
  showStatus = false,
  showView = false,
  ...props
}: MockInterviewCardProps) => {
  // DECLARE STYLE
  const classes = useStyles();
  
  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);
  const teacherMap = teacherOptions.reduce(function(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, TeacherGetItem>);

  // RENDER HTML
  return (
      <Box className={classes.card} onClick={() => showView && onView?.(props.id)}>
          <Box className={classes.cardHeader}>
            {showStatus && <Box className={classes.cardBadge} justifyContent={'flex-end'}>
              <Badge
                status={props.status.toString()}
                statusDisplay={mockInterviewStatusDisplayMap[props.status]}
                statusToColor={{
                  [MockInterviewStatusType.pending]: 'yellow',
                  [MockInterviewStatusType.completed]: 'green',
                }}
              />
            </Box>}
            <Box className={classes.cardTitle}>{props.title}</Box>
            {(showEdit || showDelete) && <Box className={classes.actionContainer}>
                <Options 
                itemsKey={compact([showEdit && 'edit', showDelete && 'delete'])}
                itemsHandler={{
                    edit: () => onEdit?.(props.id),
                    delete: () => onDelete?.(props.id),
                }}/>
            </Box>}
          </Box>
          <Box className={classes.cardDetails}><TruncatedField value={props.details} fieldLength={100}/> 
          <Box className={classes.link} component='span'>View more</Box></Box>
          
          <Box className={classes.cardFooter}>
            <Box className={classes.cardFooterContent}>
                <Box className={classes.cardFooterContentItem}>
                  <Person style={{fontSize: 24, marginRight: '8px'}}/>{studentMap[props.students].name}
                </Box>
                <Box className={classes.cardFooterContentItem}>
                  <Person4 style={{fontSize: 24, marginRight: '8px'}}/>{teacherMap[props.interviewer].name}
                </Box>
            </Box>
            <Box className={classes.cardDuration}>
              <AlarmOnOutlined style={{fontSize: 24, marginRight: '4px'}}/>
              {formatDateDisplay(props.interview_date)}</Box>
          </Box>
      </Box>
  )
}

export default MockInterviewCard;
