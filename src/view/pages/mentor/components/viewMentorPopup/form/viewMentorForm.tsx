/**
 * 
 * View Mentor form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box} from '@mui/material';
import {
  PersonOutlineOutlined,
  CalendarMonthOutlined,
  PhoneAndroidOutlined,
  EmailOutlined,
} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {Avatar} from '@/view/atoms';
import {FormAction, PopupFooter} from '@/view/molecules';

// API
import {MentorGetItem} from '@/api/mentor/mentor';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import {formatDateDisplay} from '@/utils/helper';

// STYLE IMPORT
import useStyles from '../styles';

type ViewMentorFormProps = {
  onClose: () => void;
  data: MentorGetItem;
  studentOptions: OptionType[]
};

const ViewMentorForm = ({onClose, data, studentOptions}: ViewMentorFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display='flex' flex={1}>
        <Box className={classes.viewAvatar}>
          <Avatar size="xl" label={data.name[0]}/>
        </Box>
        <Box flex={1}>
          <Box className={classes.viewFieldSet}><PersonOutlineOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{data.name}</Box>
          <Box className={classes.viewFieldSet}><CalendarMonthOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{formatDateDisplay(data.dob)}</Box>
          <Box className={classes.viewFieldSet}><EmailOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{data.email}</Box>
          <Box className={classes.viewFieldSet}><PhoneAndroidOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{data.contact_no}</Box>
        </Box>
      </Box>
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
