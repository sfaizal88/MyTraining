/**
 * 
 * ChipTech component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, } from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {CheckboxField} from '@/view/atoms';

// STYLE IMPORT
import useStyles from './styles';

type ChipTechProps = {
  label: string;
  showCheckbox?: boolean;
  name: string;
  control?: any;
  register?: any;
  setValue?: any;
  errors?: any;
  videoLink?: string;
  tutorialLink?: string;
  disabled?: boolean;
  defaultValue?: boolean;
}

const ChipTech = ({
  label,
  showCheckbox = false,
  name,
  control,
  register,
  errors,
  setValue,
  videoLink,
  tutorialLink,
  disabled = false,
  defaultValue = false,
}: ChipTechProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.chipTechBox} mr={1} mb={1}>
        {showCheckbox ? <CheckboxField
          register={register}
          name={name}
          control={control}
          setValue={setValue}
          errors={errors}
          disabled={disabled}
          defaultValue={defaultValue}
        >
            {label}
        </CheckboxField>
        : <Box className={classes.chipLabel}>{label}</Box>}
    </Box>  
  )
}

export default ChipTech;