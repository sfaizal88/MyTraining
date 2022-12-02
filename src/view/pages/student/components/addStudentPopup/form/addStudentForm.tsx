/**
 * 
 * Customer list item component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

// GENERIC COMPONENT IMPORT 
import {NumberField, TextField} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {StudentGetItem, useCreateStudentMutation, useUpdateStudentMutation} from '@/api/student/student';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import {formValidationMessages, validationMessages} from '@/utils/validationMessages';
import schema from '../schema';
import useStyles from '../styles';

type AddStudentFormProps = {
  onClose: () => void;
  data?: StudentGetItem;
};

const AddStudentForm = ({onClose, data}: AddStudentFormProps) => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const createStudentMutation = useCreateStudentMutation();
    const updateStudentMutation = useUpdateStudentMutation();

    const {control, handleSubmit, register, formState: { errors }} = useForm<StudentGetItem>({
        defaultValues: data,
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

  const onSubmit = (formData: StudentGetItem) => {
    const postResponse = {
      onSuccess: () => {
        setNotification.success();
        onClose();
      },
      onError(e: unknown) {
        setNotification.error();
        
      },
    };
    if (formData.id) {
      createStudentMutation.mutate(formData, postResponse);
    } else {
      updateStudentMutation.mutate(formData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="student name" required spacing={1.5}>
            <TextField
            register={register}
            id="name"
            name="name"
            control={control}
            placeholder="Student Name"
            errors={errors?.name}
            />
        </FormRow>
        <FormRow label="role" required spacing={1.5}>
            <TextField
            register={register}
            id="role"
            name="role"
            control={control}
            placeholder="Student Role"
            errors={errors?.role}
            />
        </FormRow>
        <FormRow label="contact no" required spacing={1.5}>
            <TextField
            register={register}
            id="contact_no"
            name="contact_no"
            control={control}
            placeholder="Student contact no"
            errors={errors?.role}
            />
        </FormRow>
        <FormRow label="email" required spacing={1.5}>
            <TextField
            register={register}
            id="email"
            name="email"
            control={control}
            placeholder="Student email"
            errors={errors?.email}
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

export default AddStudentForm;
