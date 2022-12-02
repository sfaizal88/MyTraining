/**
 * 
 * Roadmap list item component
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
import type {RoadmapGetItem, MileStoneGetItem} from '@/api/roadmap/roadmap';

// GENERIC COMPONENT IMPORT 
import {TextField, AddButton, CheckboxField, DateField} from '@/view/atoms';
import {TableRow, Options} from '@/view/molecules';

// STYLE IMPORT 
import useStyles from '../styles';

// COMPONENT PROPS
type MileStoneFormItemProps = {
  control: any;
  errors: any;
  register: any;
  setValue: any;
  formData: RoadmapGetItem;
  widths: (boolean | GridSize)[];
  onDelete?: (id: number | null) => void;
};

const MileStoneFormItem = ({
  widths,
  onDelete,
  control,
  errors,
  register,
  setValue,
  formData,
  ...props
}: MileStoneFormItemProps) => {
  // DECLARE STYLE
  const classes = useStyles();

  const formErrors = errors.mile_stone;
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'mile_stone',
    keyName: '_id',
  });

  if (fields.length === 0) {
    append({title: '', description: '', date: '', completed: false});
  }

  const addMoreMileStone = () => {
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
              name={`mile_stone[${index}].title`}
              control={control}
              placeholder="Enter title"
              errors={
                formErrors && formErrors[index]?.title
              }
            />
          </Grid>
          <Grid item xs={widths[1]}>
            <TextField
              register={register}
              name={`mile_stone[${index}].description`}
              control={control}
              placeholder="Enter description"
              errors={
                formErrors && formErrors[index]?.description
              }
            />
          </Grid>
          <Grid item xs={widths[2]}>
            <DateField
              register={register}
              name={`mile_stone[${index}].date`}
              control={control}
              placeholder="Enter date"
              disableFuture={false}
              errors={
                formErrors && formErrors[index]?.date
              }
            />
          </Grid>
          <Grid item xs={widths[3]} className={classes.center}>
            <CheckboxField
              register={register}
              name={`mile_stone[${index}].completed`}
              control={control}
              errors={
                formErrors && formErrors[index]?.date
              }
              setValue={setValue}
              defaultValue={formData.mile_stone?.[index].completed || false}
            >
            </CheckboxField>
          </Grid>
          <Grid item xs={widths[4]} className={classes.center}>
            <DeleteOutlineOutlined color={'secondary'} style={{fontSize: 24, cursor: 'pointer'}} onClick={() => remove(index)}/>
          </Grid>
        </Grid>
      </Box>
      ))}
      <AddButton label='Milestone' onClick={() => addMoreMileStone()}/>
    </>
  )
}

export default MileStoneFormItem;