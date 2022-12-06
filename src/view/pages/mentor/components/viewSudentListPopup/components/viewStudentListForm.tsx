/**
 * 
 * View student list view component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Avatar, Chip, Grid, Link} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, TableRow, PopupFooter} from '@/view/molecules';

// API
import {MentorGetItem} from '@/api/mentor/mentor';
import type {StudentGetItem} from '@/api/student/student';

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
  studentOptions: StudentGetItem[];
};

// DEFAULT COMPONENT
const ViewMentorForm = ({onClose, data, studentOptions}: ViewMentorFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, StudentGetItem>);

  return (
    <Box className={classes.root}>
        <ViewStudentListTitles/>
        {data.students.map(item => 
        <TableRow>
          <Grid item xs={2}>
            <Chip avatar={<Avatar>{studentMap[item].name[0]}</Avatar>} label={studentMap[item].name} variant="outlined"/>
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
