/**
 * 
 * TechStack list item component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {
  useFieldArray,
} from 'react-hook-form';
import {DeleteOutlineOutlined} from '@mui/icons-material';
import {Grid, GridSize, Box} from '@mui/material';
import {Dispatch, SetStateAction, useState} from 'react';
import {generatePath, Link} from 'react-router-dom';

// API
import type {TechStackGetItem} from '@/api/techStack/techStack';

// GENERIC COMPONENT IMPORT 
import {TextField, AddButton} from '@/view/atoms';

// STYLE IMPORT 
import useStyles from '../styles';

// COMPONENT PROPS
type TechDetailsFormItemProps = {
  control: any;
  errors: any;
  register: any;
  setValue: any;
  formData: TechStackGetItem;
  widths: (boolean | GridSize)[];
  onDelete?: (id: number | null) => void;
};

const TechDetailsFormItem = ({
  widths,
  onDelete,
  control,
  errors,
  register,
  setValue,
  formData,
  ...props
}: TechDetailsFormItemProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  const formErrors = errors.tech_details;
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'tech_details',
    keyName: '_id',
  });

  if (fields.length === 0) {
    append({title: '', description: '', date: '', completed: false});
  }

  const addMoreTechDetails = () => {
    append({title: '', description: '', date: '', completed: false});
  };
  

  // RENDER HTML
  return (
    <>{fields.map((field, index) => (
      <Box key={field._id} mb={1}>
        <Grid container  spacing={1}>
          <Grid item xs={widths[0]}>
            <TextField
              register={register}
              name={`tech_details[${index}].title`}
              control={control}
              placeholder="Enter topic name"
              errors={
                formErrors && formErrors[index]?.title
              }
            />
          </Grid>
          <Grid item xs={widths[1]}>
            <TextField
              register={register}
              name={`tech_details[${index}].tutorial_url`}
              control={control}
              placeholder="Enter tutorial link"
              errors={
                formErrors && formErrors[index]?.tutorial_url
              }
            />
          </Grid>
          <Grid item xs={widths[2]}>
            <TextField
              register={register}
              name={`tech_details[${index}].video_url`}
              control={control}
              placeholder="Enter video link"
              errors={
                formErrors && formErrors[index]?.video_url
              }
            />
          </Grid>
          <Grid item xs={widths[3]} className={classes.center}>
            <DeleteOutlineOutlined color={'secondary'} style={{fontSize: 24, cursor: 'pointer'}} onClick={() => remove(index)}/>
          </Grid>
        </Grid>
      </Box>
      ))}
      <AddButton label='Topic' onClick={() => addMoreTechDetails()}/>
    </>
  )
}

export default TechDetailsFormItem;