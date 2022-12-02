/**
 * 
 * Add TechStack form component
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
import {TechStackGetItem, useCreateTechStackMutation, useUpdateTechStackMutation} from '@/api/techStack/techStack';

// MODELS
import {OptionType} from '@/models/generic';

// TECH STACK COMPONENT
import TechDetailsTitles from './techDetailsTitles';
import TechDetailsFormItem from './techDetailsFormItem';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import {formValidationMessages, validationMessages} from '@/utils/validationMessages';
import schema from '../schema';
import useStyles from '../styles';

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 4, 4, 1];

type AddTechStackFormProps = {
  onClose: () => void;
  data?: TechStackGetItem;
  studentOptions: OptionType[]
};

const AddTechStackForm = ({onClose, data, studentOptions}: AddTechStackFormProps) => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const createTechStackMutation = useCreateTechStackMutation();
    const updateTechStackMutation = useUpdateTechStackMutation();

    const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<TechStackGetItem>({
        defaultValues: data,
        mode: 'onChange',
        // resolver: yupResolver(schema),
    });
    const formData = watch();
    
  const onSubmit = (postData: TechStackGetItem) => {
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
      createTechStackMutation.mutate(postData, postResponse);
    } else {
      updateTechStackMutation.mutate(postData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="Technology Name" required spacing={1.5}>
            <TextField
            register={register}
            id="title"
            name="title"
            control={control}
            placeholder="Technology Name"
            errors={errors?.title}
            />
        </FormRow>
        <FormRow label="students" required spacing={1.5}>
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
        <FormRow label="tutorial url" spacing={1.5}>
            <TextField
            register={register}
            id="tutorial_url"
            name="tutorial_url"
            control={control}
            placeholder="Tutorial link"
            errors={errors?.tutorial_url}
            />
        </FormRow>
        <FormRow label="video url" spacing={1.5}>
            <TextField
            register={register}
            id="video_url"
            name="video_url"
            control={control}
            placeholder="Video link"
            errors={errors?.video_url}
            />
        </FormRow>
        <TechDetailsTitles widths={widths}/>
        <TechDetailsFormItem 
        {...{widths, register, control, errors, setValue, formData}}/>
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

export default AddTechStackForm;
