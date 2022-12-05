/**
 * 
 * Student list item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize, Avatar, Chip, Box} from '@mui/material';

// API
import type {StudentGetItem} from '@/api/student/student';

// GENERIC COMPONENT IMPORT 
import {TableRow, Options} from '@/view/molecules';

// UTILS IMPORT 
import {formatDateDisplay} from '@/utils/helper';

// COMPONENT PROPS
type StudentListItemProps = StudentGetItem & {
  widths: (boolean | GridSize)[];
  onEdit: (studentId: number | null) => void;
  onDelete: (studentId: number | null) => void;
  onView: (studentId: number | null) => void;
};

// DEFAULT COMPONENT
const StudentListItem = ({
  widths,
  onEdit,
  onDelete,
  onView,
  ...props
}: StudentListItemProps) => {

  // RENDER HTML
  return (
    <Box onClick={() => onView(props.id)}>
      <TableRow>
        <Grid item xs={widths[0]}><Chip avatar={<Avatar>{props.name[0]}</Avatar>} label={props.name} variant="outlined"/></Grid>
        <Grid item xs={widths[1]}>{formatDateDisplay(props.dob)}</Grid>
        <Grid item xs={widths[2]}>{props.contact_no}</Grid>
        <Grid item xs={widths[3]}>{props.email}</Grid>
        <Grid item xs={widths[4]}>
          <Options 
            itemsKey={['edit', 'delete']}
            itemsHandler={{
              edit: () => onEdit(props.id),
              delete: () => onDelete(props.id),
            }}/></Grid>
      </TableRow>
    </Box>
  )
}

export default StudentListItem;
