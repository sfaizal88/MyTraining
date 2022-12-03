/**
 * 
 * Add Task form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box, GridSize} from '@mui/material';
import {useForm} from 'react-hook-form';

// GENERIC COMPONENT IMPORT 
import {NumberField, TextField, AutoComplete} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {TaskGetItem, useCreateTaskMutation, useUpdateTaskMutation} from '@/api/task/task';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import {formValidationMessages, validationMessages} from '@/utils/validationMessages';
import schema from '../schema';
import useStyles from '../styles';

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 4, 4, 1];

type AddTaskFormProps = {
  onClose: () => void;
  data?: TaskGetItem;
  studentOptions: OptionType[]
};

const AddTaskForm = ({onClose, data, studentOptions}: AddTaskFormProps) => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const createTaskMutation = useCreateTaskMutation();
    const updateTaskMutation = useUpdateTaskMutation();

    const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<TaskGetItem>({
        defaultValues: data,
        mode: 'onChange',
        // resolver: yupResolver(schema),
    });
    const formData = watch();
    
  const onSubmit = (postData: TaskGetItem) => {
    const postResponse = {
      onSuccess: () => {
        setNotification.success();
        onClose();
      },
      onError(e: unknown) {
        setNotification.error();
        
      },
    };
    if (postData.id) {
      createTaskMutation.mutate(postData, postResponse);
    } else {
      updateTaskMutation.mutate(postData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="Task Name" required  isRow>
            <TextField
            register={register}
            id="title"
            name="title"
            control={control}
            placeholder="Task Name"
            errors={errors?.title}
            />
        </FormRow>
        <FormRow label="students" required  isRow>
            <AutoComplete
              register={register}
              id="students"
              name="students"
              control={control}
              setValue={setValue}
              defaultValue={formData.students}
              placeholder="Students"
              errors={errors?.students}
              options={studentOptions}
            />
        </FormRow>
        <Box display={'flex'} flex={1} gap={0.5}>
          <Box flex={1}>
            <FormRow label="type" isRow>
                <TextField
                register={register}
                id="type"
                name="type"
                control={control}
                placeholder="Type"
                errors={errors?.type}
                />
            </FormRow>
          </Box>
          <Box flex={1}>
            <FormRow label="duration" isRow>
                <TextField
                register={register}
                id="duration"
                name="duration"
                control={control}
                placeholder="Duration"
                errors={errors?.duration}
                />
            </FormRow>
          </Box>
        </Box>
        <FormRow label="details" isRow>
            <TextField
            register={register}
            id="details"
            name="details"
            control={control}
            placeholder="Details"
            errors={errors?.details}
            multiline
            rows={3}
            />
        </FormRow>
        <FormRow label="Upload Images" isRow>
            <TextField
            register={register}
            type={'file'}
            id="images"
            name="images"
            control={control}
            placeholder="Upload Images"
            errors={errors?.images}
            />
        </FormRow>
        
        <NumberField
          id="id"
          name="id"
          control={control}
          register={register}
          hidden
          defaultValue={data?.id}
        />
      </form>
      <PopupFooter>
        <FormAction
            showSubmit
            onCancel={onClose}
            submitLabel="Save"
            onSubmit={handleSubmit(onSubmit)}
        />
      </PopupFooter>
    </Box>
  );
};

export default AddTaskForm;
