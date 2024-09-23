/**
 * 
 * Add Mentor form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Grid} from '@mui/material';
import {useForm} from 'react-hook-form';

// GENERIC COMPONENT IMPORT 
import {NumberField, TextField, AutoComplete, DateField} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {MentorGetItem, useCreateMentorMutation, useUpdateMentorMutation} from '@/api/mentor/mentor';

// MODELS
import {OptionType, MentorInitialValues} from '@/models/generic';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import schema from '../schema';
import useStyles from '../styles';

// PROPS TYPE
type AddMentorFormProps = {
  onClose: () => void;
  data?: MentorGetItem;
  studentOptions: OptionType[]
};

// DEFAULT COMPONENT
const AddMentorForm = ({onClose, data, studentOptions}: AddMentorFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // DECLARE API CALL
  const createMentorMutation = useCreateMentorMutation();
  const updateMentorMutation = useUpdateMentorMutation(data?.id);

  // HOOK FORM
  const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<MentorGetItem>({
      defaultValues: data || MentorInitialValues,
      mode: 'onChange',
      resolver: yupResolver(schema),
  });
  const formData = watch();

  // SUBMIT FORM
  const onSubmit = (postData: MentorGetItem) => {
    console.log("Add mentor form data: ", postData);
    // FORMING POST RESPONSE
    const postResponse = {
      onSuccess: (response: any) => {
        // IF ERROR COMES
        if (response.code === -1) {
          setNotification.error();
        } else {
          setNotification.success();
        }
        onClose();
      },
      onError(e: unknown) {
        setNotification.error(e); 
      },
    };
    if (postData.id) {
      updateMentorMutation.mutate(postData, postResponse);
    } else {
      createMentorMutation.mutate(postData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <Grid container columnSpacing={2} rowSpacing={0.5}>
          <Grid item xs={6}>
            <FormRow label="mentor name" required isRow>
                <TextField
                register={register}
                id="name"
                name="name"
                control={control}
                placeholder="Mentor Name"
                errors={errors?.name}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="date of birth" required isRow>
                <DateField
                  register={register}
                  setValue={setValue}
                  id="dob"
                  name="dob"
                  control={control}
                  placeholder="Date of birth"
                  disablePast={false}
                  errors={errors?.dob}
                  defaultValue={formData.dob}
                />
            </FormRow>
          </Grid>
          <Grid item xs={12}>
            <FormRow label="students" isRow>
                <AutoComplete
                  register={register}
                  setValue={setValue}
                  id="students"
                  name="students"
                  control={control}
                  placeholder="Students"
                  errors={errors?.students}
                  options={studentOptions}
                  defaultValue={formData.students}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="contact" required isRow>
                <TextField
                register={register}
                id="contact_no"
                name="contact_no"
                control={control}
                placeholder="Mentor contact no"
                errors={errors?.contact_no}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="email" required isRow>
                <TextField
                register={register}
                id="email"
                name="email"
                control={control}
                placeholder="Mentor email"
                errors={errors?.email}
                />
            </FormRow>
          </Grid>
        </Grid>
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

export default AddMentorForm;
