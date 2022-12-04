/**
 * 
 * View Task form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, PopupFooter} from '@/view/molecules';
import {TaskDetails} from '@/view/organisms';

// API
import type {TaskGetItem} from '@/api/task/task';
import type {StudentGetItem} from '@/api/student/student';

// STYLE IMPORT
import useStyles from '../styles';

type ViewTaskFormProps = {
  onClose: () => void;
  data: TaskGetItem;
  studentOptions: StudentGetItem[];
  onStudentList: (id: number | null) => void;
};

const ViewTaskForm = ({onClose, data, studentOptions, onStudentList}: ViewTaskFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TaskDetails {...{data, studentOptions, onStudentList}} />
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

export default ViewTaskForm;
