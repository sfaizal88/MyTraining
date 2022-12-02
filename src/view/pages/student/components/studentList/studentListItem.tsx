/**
 * 
 * Customer list item component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize, Avatar, Chip, Box} from '@mui/material';
import {Dispatch, SetStateAction} from 'react';
import {generatePath, Link} from 'react-router-dom';

// API
import type {StudentGetItem} from '@/api/student/student';

// GENERIC COMPONENT IMPORT 
import {TableRow, Options} from '@/view/molecules';

// STYLE IMPORT 
import useStyles from '../../styles';

// COMPONENT PROPS
type StudentListItemProps = StudentGetItem & {
  widths: (boolean | GridSize)[];
  onEdit: (studentId: number | null) => void;
  onDelete: (studentId: number | null) => void;
  onView: (studentId: number | null) => void;
};

const StudentListItem = ({
  widths,
  onEdit,
  onDelete,
  onView,
  ...props
}: StudentListItemProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // RENDER HTML
  return (
    <Box onClick={() => onView(props.id)}>
      <TableRow>
        <Grid item xs={widths[0]}><Chip avatar={<Avatar>{props.name[0]}</Avatar>} label={props.name} variant="outlined"/></Grid>
        <Grid item xs={widths[1]}>{props.role}</Grid>
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
