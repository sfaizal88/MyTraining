/**
 * 
 * View Teacher form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Stack, Avatar, Chip, Grid} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {TeacherGetItem} from '@/api/teacher/teacher';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import useStyles from '../styles';

type ViewTeacherFormProps = {
  onClose: () => void;
  data: TeacherGetItem;
  studentOptions: OptionType[]
};

const ViewTeacherForm = ({onClose, data, studentOptions}: ViewTeacherFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur, i) {
    acc[cur.value] = cur.label;
    return acc;
  }, {} as Record<number, string>);

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="teacher name" isViewOnly spacing={1.5}>
          {data.name}
        </FormRow>
        <FormRow label="students" isViewOnly spacing={1.5}>
            {data.students.map(item => 
              <Box key={item} mr={1} mb={1} display='inline-block'>
                <Chip avatar={<Avatar>{studentMap[item][0]}</Avatar>} label={studentMap[item]} variant="outlined"/>
              </Box>
            )}
        </FormRow>
        <FormRow label="contact" isViewOnly spacing={1.5}>
          {data.contact_no}
        </FormRow>
        <FormRow label="email" isViewOnly spacing={1.5}>
          {data.email}
        </FormRow>
      </form>
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

export default ViewTeacherForm;
