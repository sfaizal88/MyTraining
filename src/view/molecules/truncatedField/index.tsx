/**
 * 
 * Truncate field component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Tooltip, Box} from '@mui/material';

// COMPONENT PROPS
type TruncatedFieldProps = {
    value: string;
    fieldLength: number;
}

const TruncatedField = ({
    value,
    fieldLength,
}: TruncatedFieldProps) => (
    <Tooltip title={value.length > fieldLength ? value : ''} arrow>
      <Box component={'span'}>
        { value.length > fieldLength ? `${value.slice(0, fieldLength - 3)}...` : value}
      </Box>
    </Tooltip>
)

export default TruncatedField;