/**
 * 
 * View student list view component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Chip, Grid, Link} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {Avatar} from '@/view/atoms';
import {FormAction, TableRow, PopupFooter} from '@/view/molecules';

// API
import {MentorGetItem} from '@/api/mentor/mentor';
import {StudentGetItem, useStudentByIdsQuery} from '@/api/student/student';

// MENTOR COMPONENTS
import ViewStudentListTitles from './viewStudentListTitles';

// UTILS IMPORT 
import {formatDateDisplay} from '@/utils/helper';

// STYLE IMPORT
import useStyles from '../styles';

// PROPS TYPE
type ViewMentorFormProps = {
  onClose: () => void;
  data: MentorGetItem;
};

// DEFAULT COMPONENT
const ViewMentorForm = ({onClose, data}: ViewMentorFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();
  
  const studentListQuery = useStudentByIdsQuery(data.students.map(item => item));

  // LOCAL VARIABLE
  const studentMap = studentListQuery.data.reduce(function(acc: Record<number, StudentGetItem>, cur: StudentGetItem) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);

  return (
    <Box className={classes.root}>
        <ViewStudentListTitles/>
        {data.students.map(item => 
        <TableRow>
          <Grid item xs={2}>
            <Chip avatar={<Avatar size="xs" label={studentMap[item].name[0]}/>} label={studentMap[item].name} variant="outlined"/>
          </Grid>
          <Grid item xs={2}>{formatDateDisplay(studentMap[item].dob)}</Grid>
          <Grid item xs={2}>{studentMap[item].contact_no}</Grid>
          <Grid item xs={2}>{studentMap[item].email}</Grid>
          <Grid item xs={2}>
            {studentMap[item]?.linked_link && 
                <Link underline='none' className={classes.link} target="_blank" href={studentMap[item].linked_link}>Linkedin Profile</Link>
            }
          </Grid>
          <Grid item xs={2}>
            {studentMap[item]?.github_link && 
                <Link underline='none' className={classes.link} target="_blank" href={studentMap[item].github_link}>Github Profile</Link>
            }
          </Grid>
        </TableRow>
        )}
      <PopupFooter>
        <FormAction
            showSubmit
            submitLabel="Close"
            onSubmit={onClose}
        />
      </PopupFooter>
    </Box>
  );
};
export default ViewMentorForm;
