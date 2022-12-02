/**
 * 
 * Customer list item component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, FormRow} from '@/view/molecules';

// API
import {StudentGetItem} from '@/api/student/student';

// UTILS IMPORT
import useStyles from '../styles';

type ViewStudentFormProps = {
  onClose: () => void;
  data?: StudentGetItem;
};

const ViewStudentForm = ({onClose, data}: ViewStudentFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="student name" spacing={1.5} isViewOnly>
            {data?.name}
        </FormRow>
        <FormRow label="role" spacing={1.5} isViewOnly>
            {data?.role}
        </FormRow>
        <FormRow label="contact no" spacing={1.5} isViewOnly>
            {data?.contact_no}
        </FormRow>
        <FormRow label="email" spacing={1.5} isViewOnly>
            {data?.email}
        </FormRow>
      </form>
      <Box flex="1" py={2} className={classes.footerButtonsBox}>
        <FormAction
            showSubmit
            submitLabel="Close"
            onSubmit={onClose}
        />
      </Box>
    </Box>
  );
};

export default ViewStudentForm;
