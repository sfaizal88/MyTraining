/**
 * 
 * Student list item component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize, Avatar, Chip, Box} from '@mui/material';
import {useNavigate, generatePath} from 'react-router-dom';

// API
import type {StudentGetItem} from '@/api/student/student';

// GENERIC COMPONENT IMPORT 
import {TableRow} from '@/view/molecules';

// ROUTER IMPORT
import * as PATH from '@/view/routes/constants';

// COMPONENT PROPS
type StudentListItemProps = StudentGetItem & {
  widths: (boolean | GridSize)[];
};

const StudentListItem = ({
  widths,
  ...props
}: StudentListItemProps) => {

  // DECLARE NOTIFICATION AND NAVIDATE
  const navigate = useNavigate();

  // RENDER HTML
  return (
    <Box onClick={() => navigate(generatePath(PATH.STUDENT_REPORT_PATH, {id: props.id.toString()}))}>
      <TableRow>
        <Grid item xs={widths[0]}><Chip avatar={<Avatar>{props.name[0]}</Avatar>} label={props.name} variant="outlined"/></Grid>
        <Grid item xs={widths[1]}></Grid>
        <Grid item xs={widths[2]}>{props.contact_no}</Grid>
        <Grid item xs={widths[3]}>{props.email}</Grid>
      </TableRow>
    </Box>
  )
}

export default StudentListItem;
