/**
 * 
 * Add Teacher form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box} from '@mui/material';
import {useForm} from 'react-hook-form';

// GENERIC COMPONENT IMPORT 
import {NumberField, TextField, AutoComplete} from '@/view/atoms';
import {FormAction, FormRow} from '@/view/molecules';

// API
import {TeacherGetItem, useCreateTeacherMutation, useUpdateTeacherMutation} from '@/api/teacher/teacher';

// MODELS
import {OptionType} from '@/models/generic';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import {formValidationMessages, validationMessages} from '@/utils/validationMessages';
import schema from '../schema';
import useStyles from '../styles';

type AddTeacherFormProps = {
  onClose: () => void;
  data?: TeacherGetItem;
  studentOptions: OptionType[]
};

const AddTeacherForm = ({onClose, data, studentOptions}: AddTeacherFormProps) => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const createTeacherMutation = useCreateTeacherMutation();
    const updateTeacherMutation = useUpdateTeacherMutation();

    const {control, handleSubmit, register, formState: { errors }, setValue} = useForm<TeacherGetItem>({
        defaultValues: data,
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

  const onSubmit = (formData: TeacherGetItem) => {
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
      createTeacherMutation.mutate(formData, postResponse);
    } else {
      updateTeacherMutation.mutate(formData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="teacher name" required spacing={1.5}>
            <TextField
            register={register}
            id="name"
            name="name"
            control={control}
            placeholder="Teacher Name"
            errors={errors?.name}
            />
        </FormRow>
        <FormRow label="students" required spacing={1.5}>
            <AutoComplete
              register={register}
              setValue={setValue}
              id="students"
              name="students"
              control={control}
              placeholder="Students"
              errors={errors?.students}
              options={studentOptions}
            />
        </FormRow>
        <FormRow label="contact" required spacing={1.5}>
            <TextField
            register={register}
            id="contact_no"
            name="contact_no"
            control={control}
            placeholder="Teacher email"
            errors={errors?.email}
            />
        </FormRow>
        <FormRow label="email" required spacing={1.5}>
            <TextField
            register={register}
            id="email"
            name="email"
            control={control}
            placeholder="Teacher email"
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
      <Box flex="1" py={2} className={classes.footerButtonsBox}>
        <FormAction
            showSubmit
            onCancel={onClose}
            submitLabel="Save"
            onSubmit={handleSubmit(onSubmit)}
        />
      </Box>
    </Box>
  );
};

export default AddTeacherForm;
