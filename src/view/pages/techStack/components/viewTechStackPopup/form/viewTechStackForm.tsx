/**
 * 
 * View TechStack form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Chip} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {Avatar} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter, ChipTech, EmptyLabel} from '@/view/molecules';

// API
import type {TechStackGetItem} from '@/api/techStack/techStack';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import useStyles from '../styles';

type ViewTechStackFormProps = {
  onClose: () => void;
  data: TechStackGetItem;
  studentOptions: OptionType[]
};

const ViewTechStackForm = ({onClose, data, studentOptions}: ViewTechStackFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // LOCAL VARIABLE
  const studentMap = studentOptions.reduce(function(acc, cur, i) {
    acc[cur.value] = cur.label;
    return acc;
  }, {} as Record<number, string>);

  return (
    <Box className={classes.root}>
      <FormRow label="Technology" isViewOnly>
        {data.title}
      </FormRow>
      <FormRow label="assigned to" isViewOnly>
          {data.students.length ? data.students.map((item: number) => 
            <Box key={item} mr={1} mb={1} display='inline-block'>
              <Chip avatar={<Avatar size="xs" label={studentMap[item].toString().charAt(0)}/>} label={studentMap[item]} variant="outlined"/>
            </Box>
          ): <EmptyLabel label={'No student assigned'}/>}
      </FormRow>
      <FormRow label="topics" isViewOnly>
        {data.tech_details.map((item) =>
          <ChipTech
            key={item.id}
            name={item.title}
            label={item.title}
            videoLink={item.video_url}
            tutorialLink={item.tutorial_url}
          />
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
