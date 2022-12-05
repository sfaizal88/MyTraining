/**
 * 
 * Add student component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Grid} from '@mui/material';
import {useForm} from 'react-hook-form';

// GENERIC COMPONENT IMPORT 
import {NumberField, TextField, DateField} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {StudentGetItem, useCreateStudentMutation, useUpdateStudentMutation} from '@/api/student/student';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import schema from '../schema';
import useStyles from '../styles';

// PROPS TYPE
type AddStudentFormProps = {
  onClose: () => void;
  data?: StudentGetItem;
};

// DEFAULT COMPONENT
const AddStudentForm = ({onClose, data}: AddStudentFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // DECLARE API CALL
  const createStudentMutation = useCreateStudentMutation();
  const updateStudentMutation = useUpdateStudentMutation(data?.id);

  // REACT HOOK FORM DECLARE
  const {control, handleSubmit, register, formState: { errors }, setValue} = useForm<StudentGetItem>({
      defaultValues: data,
      mode: 'onChange',
      resolver: yupResolver(schema),
  });

    // LOGIN FUNCTION
  const onSubmit = (formData: StudentGetItem) => {
    console.log("Add student form data: ", formData);
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
    // CHECKING WHETHER ITS TO CALL ADD OR UPDATE API
    if (formData.id) {
      // CALLING UPDATE API
      updateStudentMutation.mutate(formData, postResponse);
    } else {
      // CALLING CREATE API
      createStudentMutation.mutate(formData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <Grid container columnSpacing={2} rowSpacing={0.5}>
          <Grid item xs={6}>
            <FormRow label="full name" required isRow>
                <TextField
                register={register}
                id="name"
                name="name"
                control={control}
                placeholder="Full Name"
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
                  defaultValue={"04/12/2022"}
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
                placeholder="Email"
                errors={errors?.email}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="contact no" required isRow>
                <TextField
                register={register}
                id="contact_no"
                name="contact_no"
                control={control}
                placeholder="Contact no"
                errors={errors?.contact_no}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="Linked URL" isRow>
                <TextField
                register={register}
                id="linked_link"
                name="linked_link"
                control={control}
                placeholder="Linked URL"
                errors={errors?.linked_link}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="Github URL" isRow>
                <TextField
                register={register}
                id="github_link"
                name="github_link"
                control={control}
                placeholder="Github URL"
                errors={errors?.github_link}
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

export default AddStudentForm;
