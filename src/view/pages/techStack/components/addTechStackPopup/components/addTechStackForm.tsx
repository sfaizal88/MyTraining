/**
 * 
 * Add TechStack form component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {Box, GridSize, Grid} from '@mui/material';
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
import schema from '../schema';
import useStyles from '../styles';

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [true, 4, 4, 2];

// PROPS TYPE
type AddTechStackFormProps = {
  onClose: () => void;
  data?: TechStackGetItem;
  studentOptions: OptionType[]
};

// DEFAULT COMPONENT
const AddTechStackForm = ({onClose, data, studentOptions}: AddTechStackFormProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  // DECLARE NOTIFICATION AND NAVIDATE
  const setNotification = useNotification();

  // DECLARE API CALL
  const createTechStackMutation = useCreateTechStackMutation();
  const updateTechStackMutation = useUpdateTechStackMutation(data?.id);

  // REACT HOOK FORM
  const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<TechStackGetItem>({
      defaultValues: data,
      mode: 'onChange',
      resolver: yupResolver(schema),
  });
  const formData = watch();
    
  // SUBMIT FORM
  const onSubmit = (postData: TechStackGetItem) => {
    console.log("Tech stack form: ", postData);
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
      updateTechStackMutation.mutate(postData, postResponse);
    } else {
      createTechStackMutation.mutate(postData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <Grid container columnSpacing={2} rowSpacing={0.5}>
          <Grid item xs={12}>
            <FormRow label="Technology Name" required isRow>
                <TextField
                register={register}
                id="title"
                name="title"
                control={control}
                placeholder="Technology Name"
                errors={errors?.title}
                />
            </FormRow>
          </Grid>
          <Grid item xs={12}>
            <FormRow label="students" isRow>
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
          </Grid>
          <Grid item xs={6}>
            <FormRow label="tutorial url" isRow>
                <TextField
                register={register}
                id="tutorial_url"
                name="tutorial_url"
                control={control}
                placeholder="Tutorial link"
                errors={errors?.tutorial_url}
                />
            </FormRow>
          </Grid>
          <Grid item xs={6}>
            <FormRow label="video url" isRow>
                <TextField
                register={register}
                id="video_url"
                name="video_url"
                control={control}
                placeholder="Video link"
                errors={errors?.video_url}
                />
            </FormRow>
          </Grid>
        </Grid>
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
            onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
        />
      </PopupFooter>
    </Box>
  );
};

export default AddTechStackForm;
