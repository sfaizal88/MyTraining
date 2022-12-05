/**
 * 
 * View student list view component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Avatar, Chip, Grid} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, TableRow, PopupFooter} from '@/view/molecules';

// API
import {MentorGetItem} from '@/api/mentor/mentor';
import type {StudentGetItem} from '@/api/student/student';

// MENTOR COMPONENTS
import ViewStudentListTitles from './viewStudentListTitles';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import useStyles from '../styles';

type ViewMentorFormProps = {
  onClose: () => void;
  data: MentorGetItem;
  studentOptions: StudentGetItem[];
};

const ViewMentorForm = ({onClose, data, studentOptions}: ViewMentorFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

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
          <Grid item xs={3}>
            <Chip avatar={<Avatar>{studentMap[item].name[0]}</Avatar>} label={studentMap[item].name} variant="outlined"/>
          </Grid>
          <Grid item xs={3}>{studentMap[item].role}</Grid>
          <Grid item xs={3}>{studentMap[item].contact_no}</Grid>
          <Grid item xs={3}>{studentMap[item].email}</Grid>
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