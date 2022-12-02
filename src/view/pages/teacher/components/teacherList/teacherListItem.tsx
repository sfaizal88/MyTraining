/**
 * 
 * Teacher list item component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize, Avatar, Chip, Box} from '@mui/material';
import {Dispatch, SetStateAction} from 'react';
import {generatePath, Link} from 'react-router-dom';

// API
import type {TeacherGetItem} from '@/api/teacher/teacher';

// GENERIC COMPONENT IMPORT 
import {TableRow, Options} from '@/view/molecules';

// STYLE IMPORT 
import useStyles from '../../styles';

// COMPONENT PROPS
type TeacherListItemProps = TeacherGetItem & {
  widths: (boolean | GridSize)[];
  onEdit: (id: number | null) => void;
  onDelete: (id: number | null) => void;
  onView: (id: number | null) => void;
  onStudentList: (id: number | null) => void;
};

const TeacherListItem = ({
  widths,
  onEdit,
  onDelete,
  onView,
  onStudentList,
  ...props
}: TeacherListItemProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // RENDER HTML
  return (
    <Box onClick={() => onView(props.id)}>
      <TableRow>
        <Grid item xs={widths[0]}><Chip avatar={<Avatar>{props.name[0]}</Avatar>} label={props.name} variant="outlined"/></Grid>
        <Grid item xs={widths[1]}>
          <Box className={classes.link} 
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            onStudentList(props.id);
          }}>{props.students.length} Students</Box>
        </Grid>
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

export default TeacherListItem;
