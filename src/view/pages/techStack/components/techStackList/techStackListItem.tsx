/**
 * 
 * TechStack list item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Grid, GridSize, Chip, Box} from '@mui/material';

// API
import type {TechStackGetItem} from '@/api/techStack/techStack';

// GENERIC COMPONENT IMPORT 
import {Avatar} from '@/view/atoms';
import {TableRow, Options} from '@/view/molecules';

// STYLE IMPORT 
import useStyles from '../../styles';

// COMPONENT PROPS
type TechStackListItemProps = TechStackGetItem & {
  widths: (boolean | GridSize)[];
  onEdit: (id: number | null) => void;
  onDelete: (id: number | null) => void;
  onView: (id: number | null) => void;
  onStudentList: (id: number | null) => void;
};

const TechStackListItem = ({
  widths,
  onEdit,
  onDelete,
  onView,
  onStudentList,
  ...props
}: TechStackListItemProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // RENDER HTML
  return (
    <Box onClick={() => {
        onView(props.id);
      }}>
      <TableRow>
        <Grid item xs={widths[0]}><Chip avatar={<Avatar size="xs" label={props.title[0]}/>} label={props.title} variant="outlined"/></Grid>
        <Grid item xs={widths[1]}>
          <Box className={classes.link} 
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                onStudentList(props.id);
              }}>{props.students.length} Students</Box>
        </Grid>
        <Grid item xs={widths[2]}>{props.tech_details.length} Topics</Grid>
        <Grid item xs={widths[4]} className={classes.actionContainer}>
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

export default TechStackListItem;
