/**
 * 
 * View Task form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Alert} from '@mui/material';
import {useForm} from 'react-hook-form';

// GENERIC COMPONENT IMPORT 
import {TextField} from '@/view/atoms';
import {FormAction, PopupFooter, FormRow} from '@/view/molecules';
import {TaskDetails} from '@/view/organisms';

// API
import type {TaskGetItem} from '@/api/task/task';
import type {StudentGetItem} from '@/api/student/student';

// UTILS
import {TaskStatusType} from '@/utils/enum';

// STYLE IMPORT
import useStyles from '../styles';

type SubmitCodeFormType = {
  review: string;
  githubLink: string;
};

type ViewTaskFormProps = {
  onClose: () => void;
  data: TaskGetItem;
  studentOptions: StudentGetItem[];
  onStudentList: (id: number | null) => void;
};

const ViewTaskForm = ({onClose, data, studentOptions, onStudentList}: ViewTaskFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  
  const {control, handleSubmit, register, formState: { errors }} = useForm<SubmitCodeFormType>({
    mode: 'onChange',
    // resolver: yupResolver(schema(categoryList)),
  });

  const btnLabelMap: Record<number, any> = {
    [TaskStatusType.notStarted]: {
      label: "Start Coding"
    },
    [TaskStatusType.started]: {
      label: "Submit Code"
    },
    [TaskStatusType.reviewCompleted]: {
      label: "Final Submit"
    },
  };

  return (
    <Box className={classes.root}>
      <form>
      {[TaskStatusType.reviewPending].includes(data.status) && <Box mb={1}><Alert severity="warning">Your code is in review with mentor, Once your code get reviewed, we will notify you.</Alert></Box>}
      {[TaskStatusType.reviewCompleted].includes(data.status) && <Box mb={1}><Alert severity="success">Teached review your code successfully, you can submit your project finally.</Alert></Box>}
      <TaskDetails {...{data, studentOptions, onStudentList}} showStatus/>
      {[TaskStatusType.started].includes(data.status) && <>
        <FormRow label="Github Link" required isRow>
          <TextField
              register={register}
              id="githubLink"
              name="githubLink"
              control={control}
              placeholder="Enter github link"
              errors={errors?.githubLink}
          />
        </FormRow>
        <FormRow label="Notes" isRow>
            <TextField
                register={register}
                id="notes"
                name="notes"
                control={control}
                placeholder="Enter notes"
                errors={errors?.review}
                multiline
                rows={3}
            />
        </FormRow>
      </>}
      {[TaskStatusType.reviewPending, TaskStatusType.reviewCompleted, TaskStatusType.done].includes(data.status) && <>
        <FormRow label="Github Link" isRow isViewOnly>
          {data.githubLink}
        </FormRow>
        {data.notes && <FormRow label="Notes" isRow isViewOnly>
          {data.notes}
        </FormRow>}
      </>}
      {[TaskStatusType.reviewCompleted, TaskStatusType.done].includes(data.status) &&
        <FormRow label="Mentor review" isRow isViewOnly>
          {data.review}
        </FormRow>
      }

      <PopupFooter>
        <FormAction
            cancelLabel='Close'
            onCancel={onClose}
            showSubmit={![TaskStatusType.done, TaskStatusType.reviewPending].includes(data.status)}
            submitLabel={btnLabelMap[data.status]?.label}
            onSubmit={onClose}
        />
      </PopupFooter>
      </form>
    </Box>
  );
};

export default ViewTaskForm;
