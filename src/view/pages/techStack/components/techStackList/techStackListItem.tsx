/**
 * 
 * TechStack list item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import compact from 'lodash/compact';
import {Grid, GridSize, Chip, Box} from '@mui/material';

// API
import type {TechStackGetItem} from '@/api/techStack/techStack';

// GENERIC COMPONENT IMPORT 
import {Avatar} from '@/view/atoms';
import {TableRow, Options, EmptyLabel} from '@/view/molecules';

// STYLE IMPORT 
import useStyles from '../../styles';

// COMPONENT PROPS
type TechStackListItemProps = TechStackGetItem & {
  widths: (boolean | GridSize)[];
  onEdit: (id: number | null) => void;
  onDelete: (id: number | null) => void;
  onView: (id: number | null) => void;
  onStudentList: (id: number[] | null) => void;
};

// DEFAULT COMPONENT
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
        <Grid item xs={widths[0]}><Chip avatar={<Avatar size="xs" label={props.title.toString().charAt(0)}/>} label={props.title} variant="outlined"/></Grid>
        <Grid item xs={widths[1]}>
          {props.students.length ?
            <Box className={classes.link} 
                onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  onStudentList(props.students);
                }}>{props.students.length} Students
            </Box> : <EmptyLabel label={'No student assigned'}/>}
        </Grid>
        <Grid item xs={widths[2]}>{props.total_topics} Topics</Grid>
        <Grid item xs={widths[4]} className={classes.actionContainer}>
          <Options 
            itemsKey={compact(['edit', props.can_delete && 'delete'])}
            itemsHandler={{
              edit: () => onEdit(props.id),
              delete: () => onDelete(props.id),
            }}/></Grid>
      </TableRow>
    </Box>
  )
}

export default TechStackListItem;
