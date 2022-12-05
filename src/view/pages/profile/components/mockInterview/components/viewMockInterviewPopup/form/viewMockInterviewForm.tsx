/**
 * 
 * Customer list item component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Link} from '@mui/material';
import {useContext} from 'react';

// GENERIC COMPONENT IMPORT 
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {MockInterviewGetItem} from '@/api/mockInterview/mockInterview';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';
import {UserContext} from '@/contexts/userContext';

// UTILS IMPORT
import {formatDateDisplay} from '@/utils/helper';

// STYLE IMPORT
import useStyles from '../styles';

type ViewMockInterviewFormProps = {
  onClose: () => void;
  data: MockInterviewGetItem;
};

const ViewMockInterviewForm = ({onClose, data}: ViewMockInterviewFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // CONTEXT DECALRE
  const profileContext = useContext(ProfileContext);
  const userContext = useContext(UserContext);

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="title" spacing={1.5} isViewOnly>
            {data.title}
        </FormRow>
        <FormRow label="details" spacing={1.5} isViewOnly>
            {data.details}
        </FormRow>
        <FormRow label="candidate name" spacing={1.5} isViewOnly>
            {profileContext.name}
        </FormRow>
        <FormRow label="interviewer" spacing={1.5} isViewOnly>
            {userContext.name}
        </FormRow>
        <FormRow label="interview date" spacing={1.5} isViewOnly>
            {formatDateDisplay(data.interview_date)}
        </FormRow>
        <FormRow label="meeting link" spacing={1.5} isViewOnly>
          <Link target="_blank" href={data.meeting_link} underline="none">{data.meeting_link}</Link>
        </FormRow>
        {data.review && 
          <FormRow label="mentor review" spacing={1.5} isViewOnly>
              {data.review}
          </FormRow>
        }
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

export default ViewMockInterviewForm;
