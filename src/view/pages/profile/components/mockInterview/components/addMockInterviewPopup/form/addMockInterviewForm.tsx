/**
 * 
 * Add Mock Interview component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Grid} from '@mui/material';
import {useForm} from 'react-hook-form';
import {useContext} from 'react';

// GENERIC COMPONENT IMPORT 
import {NumberField, TextField, DateField} from '@/view/atoms';
import {FormAction, FormRow, PopupFooter} from '@/view/molecules';

// API
import {MockInterviewGetItem, useCreateMockInterviewMutation, useUpdateMockInterviewMutation} from '@/api/mockInterview/mockInterview';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';
import {UserContext} from '@/contexts/userContext';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import schema from '../schema';
import useStyles from '../styles';

type AddMockInterviewFormProps = {
  onClose: () => void;
  data?: MockInterviewGetItem;
};

const AddMockInterviewForm = ({onClose, data}: AddMockInterviewFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // DECLARE API CALL
  const createMockInterviewMutation = useCreateMockInterviewMutation();
  const updateMockInterviewMutation = useUpdateMockInterviewMutation();

  const {control, handleSubmit, register, formState: { errors }} = useForm<MockInterviewGetItem>({
      defaultValues: data,
      mode: 'onChange',
      resolver: yupResolver(schema),
  });

  // CONTEXT DECALRE
  const profileContext = useContext(ProfileContext);
  const userContext = useContext(UserContext);
  const userId = profileContext.id;
  const interviewerId = userContext.id;

  const onSubmit = (formData: MockInterviewGetItem) => {
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
      createMockInterviewMutation.mutate(formData, postResponse);
    } else {
      updateMockInterviewMutation.mutate(formData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <Grid container>
          <Grid item xs={6}>
            <FormRow label="Candidate" isRow isViewOnly>
              {profileContext.name}
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="Interviewer" isRow isViewOnly>
              {userContext.name}
            </FormRow>
          </Grid>
        </Grid>
        <FormRow label="title" required isRow>
          <TextField
          register={register}
          id="title"
          name="title"
          control={control}
          placeholder="Title"
          errors={errors?.title}
          />
        </FormRow>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormRow label="Interview date" required isRow>
              <DateField
                register={register}
                id="interview_date"
                name="interview_date"
                control={control}
                placeholder="Interview date"
                disableFuture={false}
                errors={errors?.interview_date}
              />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="Meeting link" required isRow>
              <TextField
                register={register}
                id="meeting_link"
                name="meeting_link"
                control={control}
                placeholder="Meeting link"
                errors={errors?.meeting_link}
              />
            </FormRow>
          </Grid>
        </Grid>
        <FormRow label="details" required isRow>
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
        <NumberField
          id="students"
          name="students"
          control={control}
          register={register}
          hidden
          defaultValue={userId}
        />
        <NumberField
          id="interviewer"
          name="interviewer"
          control={control}
          register={register}
          hidden
          defaultValue={interviewerId}
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

export default AddMockInterviewForm;
