/**
 * 
 * Add Roadmap form component
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
import {FormAction, FormRow} from '@/view/molecules';

// API
import {RoadmapGetItem, useCreateRoadmapMutation, useUpdateRoadmapMutation} from '@/api/roadmap/roadmap';

// MODELS
import {OptionType} from '@/models/generic';

// ROAD MAP COMPONENT
import MileStoneTitles from './mileStoneTitles';
import MileStoneFormItem from './mileStoneFormItem';

// UTILS IMPORT
import useNotification from '@/utils/notification';
import {formValidationMessages, validationMessages} from '@/utils/validationMessages';
import schema from '../schema';
import useStyles from '../styles';

// TITLES COMPONENT PROPS
const widths: (boolean | GridSize)[] = [3, 5, 2, 1, 1];

type AddRoadmapFormProps = {
  onClose: () => void;
  data?: RoadmapGetItem;
  studentOptions: OptionType[]
};

const AddRoadmapForm = ({onClose, data, studentOptions}: AddRoadmapFormProps) => {
    // DECLARE STYLE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const createRoadmapMutation = useCreateRoadmapMutation();
    const updateRoadmapMutation = useUpdateRoadmapMutation();

    const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<RoadmapGetItem>({
        defaultValues: data,
        mode: 'onChange',
        // resolver: yupResolver(schema),
    });
    const formData = watch();
    
  const onSubmit = (postData: RoadmapGetItem) => {
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
      createRoadmapMutation.mutate(postData, postResponse);
    } else {
      updateRoadmapMutation.mutate(postData, postResponse);
    }
  };

  return (
    <Box className={classes.root}>
      <form>
        <FormRow label="roadmap name" required spacing={1.5}>
            <TextField
            register={register}
            id="name"
            name="name"
            control={control}
            placeholder="Roadmap Name"
            errors={errors?.name}
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
        <MileStoneTitles widths={widths}/>
        <MileStoneFormItem 
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

export default AddRoadmapForm;
