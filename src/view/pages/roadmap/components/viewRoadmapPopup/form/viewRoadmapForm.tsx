/**
 * 
 * View Roadmap form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import omit from 'lodash/omit';
import {useState} from 'react';
import {Box, Avatar, Chip, Collapse} from '@mui/material';
import {KeyboardArrowDownOutlined, KeyboardArrowUpOutlined} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {Badge} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import type {RoadmapGetItem} from '@/api/roadmap/roadmap';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import {formatDateDisplay} from '@/utils/helper';
import {StatusType} from '@/utils/enum';
import useStyles from '../styles';

type ViewRoadmapFormProps = {
  onClose: () => void;
  data?: RoadmapGetItem;
  studentOptions: OptionType[]
};

const ViewRoadmapForm = ({onClose, data, studentOptions}: ViewRoadmapFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const [opened, setOpened] = useState({} as Record<string, boolean>);
  const studentMap = studentOptions.reduce(function(acc, cur, i) {
    acc[cur.value] = cur.label;
    return acc;
  }, {} as Record<number, string>);


  const sectionOpen = (menuId: number) => {
    setOpened((state) =>
        state[menuId] ? omit(state, menuId) : {...state, [menuId]: true},
    )
}

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="roadmap name" isViewOnly spacing={1.5}>
          {data?.name}
        </FormRow>
        <FormRow label="assigned to" isViewOnly spacing={1.5}>
            {data?.students.map((item: number) => 
              <Box key={item} mr={1} mb={1} display='inline-block'>
                <Chip avatar={<Avatar>{studentMap[item][0]}</Avatar>} label={studentMap[item]} variant="outlined"/>
              </Box>
            )}
        </FormRow>
        {data?.mile_stone.map((item, index) =>
          <Box key={item.title} mb={2}>
            <Box className={classes.collapseHeader} onClick={() => sectionOpen(index)}>
              <Box className={classes.no}>{index + 1}</Box>
              <Box flex={1}>{item.title}</Box>
              <Box className={classes.expand}>
                  {opened[index] ? <KeyboardArrowUpOutlined/> :
                  <KeyboardArrowDownOutlined/>}
              </Box>
            </Box>
            <Collapse in={opened[index]} timeout="auto" unmountOnExit className={classes.collapseBody}>
              <FormRow label="description" isViewOnly spacing={1.5}>
                {item.description}
              </FormRow>
              <FormRow label="date" isViewOnly spacing={1.5}>
                {formatDateDisplay(item.date)}
              </FormRow>
              <FormRow label="status" isViewOnly spacing={1.5}>
                <Badge
                  status={item.completed ? StatusType.completed.toString() : StatusType.pending.toString()}
                  statusDisplay={item.completed ? 'Completed' : 'Pending'}
                  statusToColor={{
                    [StatusType.completed]: 'green',
                    [StatusType.pending]: 'yellow',
                  }}
                />
              </FormRow>
            </Collapse>
          </Box>
        )}
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
