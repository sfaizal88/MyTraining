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
  data: StudentGetItem[];
};

// DEFAULT COMPONENT
const ViewMentorForm = ({onClose, data}: ViewMentorFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <Box className={classes.root}>
        <ViewStudentListTitles/>
        {data.map(item => 
        <TableRow>
          <Grid item xs={2}>
            <Chip avatar={<Avatar size="xs" label={item.name[0]}/>} label={item.name} variant="outlined"/>
          </Grid>
          <Grid item xs={2}>{formatDateDisplay(item.dob)}</Grid>
          <Grid item xs={2}>{item.contact_no}</Grid>
          <Grid item xs={2}>{item.email}</Grid>
          <Grid item xs={2}>
            {item?.linked_link && 
                <Link underline='none' className={classes.link} target="_blank" href={item.linked_link}>Linkedin Profile</Link>
            }
          </Grid>
          <Grid item xs={2}>
            {item?.github_link && 
                <Link underline='none' className={classes.link} target="_blank" href={item.github_link}>Github Profile</Link>
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
