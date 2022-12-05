/**
 * 
 * View Roadmap form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Avatar, Chip} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {FormAction, FormRow, PopupFooter, Timeline} from '@/view/molecules';

// API
import type {RoadmapGetItem} from '@/api/roadmap/roadmap';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import useStyles from '../styles';

type ViewRoadmapFormProps = {
  onClose: () => void;
  data: RoadmapGetItem;
  studentOptions: OptionType[]
};

const ViewRoadmapForm = ({onClose, data, studentOptions}: ViewRoadmapFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur, i) {
    acc[cur.value] = cur.label;
    return acc;
  }, {} as Record<number, string>);

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="roadmap name" isViewOnly spacing={1.5}>
          {data.name}
        </FormRow>
        <FormRow label="assigned to" isViewOnly spacing={1.5}>
            {data.students.map((item: number) => 
              <Box key={item} mr={1} mb={1} display='inline-block'>
                <Chip avatar={<Avatar>{studentMap[item][0]}</Avatar>} label={studentMap[item]} variant="outlined"/>
              </Box>
            )}
        </FormRow>
        <Timeline mileStone={data.mile_stone || []}/>
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

export default ViewRoadmapForm;
