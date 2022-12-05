/**
 * 
 * View student form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Avatar, Link} from '@mui/material';
import {
  PersonOutlineOutlined,
  CalendarMonthOutlined,
  PhoneAndroidOutlined,
  EmailOutlined,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {FormAction, PopupFooter} from '@/view/molecules';

// API
import {StudentGetItem} from '@/api/student/student';

// UTILS IMPORT
import {formatDateDisplay} from '@/utils/helper';

// UTILS IMPORT
import useStyles from '../styles';

// PROPS TYPE
type ViewStudentFormProps = {
  onClose: () => void;
  data: StudentGetItem;
};

// DEFAULT COMPONENT
const ViewStudentForm = ({onClose, data}: ViewStudentFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box display='flex' flex={1}>
        <Box className={classes.viewAvatar}>
          <Avatar sx={{ width: 130, height: 130, fontSize: 50, bgcolor: "#b8e994", color: "#10ac84" }}>{data.name[0]}</Avatar>
        </Box>
        <Box flex={1}>
          <Box className={classes.viewFieldSet}><PersonOutlineOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{data.name}</Box>
          <Box className={classes.viewFieldSet}><CalendarMonthOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{formatDateDisplay(data.dob)}</Box>
          <Box className={classes.viewFieldSet}><EmailOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{data.email}</Box>
          <Box className={classes.viewFieldSet}><PhoneAndroidOutlined style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>{data.contact_no}</Box>
          {data?.linked_link && 
            <Box className={classes.viewFieldSet}>
              <LinkedIn style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>
              <Link target="_blank" href={data.linked_link}>Visit Linkedin Profile</Link>
            </Box>
          }
          {data?.github_link && 
            <Box className={classes.viewFieldSet}>
              <GitHub style={{color: '#313131', fontSize: 22, marginRight: '4px'}}/>
              <Link target="_blank" href={data.github_link}>Visit Github Profile</Link>
            </Box>
          }
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

export default ViewStudentForm;
