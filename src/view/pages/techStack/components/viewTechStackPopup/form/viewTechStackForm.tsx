/**
 * 
 * View TechStack form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import omit from 'lodash/omit';
import {useState} from 'react';
import {Box, Avatar, Chip} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {ChipTech} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import type {TechStackGetItem} from '@/api/techStack/techStack';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import useStyles from '../styles';

type ViewTechStackFormProps = {
  onClose: () => void;
  data?: TechStackGetItem;
  studentOptions: OptionType[]
};

const ViewTechStackForm = ({onClose, data, studentOptions}: ViewTechStackFormProps) => {
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
      <FormRow label="Technology" isViewOnly>
        {data?.title}
      </FormRow>
      <FormRow label="assigned to" isViewOnly>
          {data?.students.map((item: number) => 
            <Box key={item} mr={1} mb={1} display='inline-block'>
              <Chip avatar={<Avatar>{studentMap[item][0]}</Avatar>} label={studentMap[item]} variant="outlined"/>
            </Box>
          )}
      </FormRow>
      <FormRow label="topics" isViewOnly>
        {data?.tech_details.map((item, index) =>
            <Box key={item.id} mr={1} mb={1} display='inline-block'>
              <ChipTech
                label={item.title}
                videoLink={item.video_url}
                tutorialLink={item.tutorial_url}
              />
            </Box>
        )}
      </FormRow>
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

export default ViewTechStackForm;
