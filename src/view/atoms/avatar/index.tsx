/**
 * 
 * Avatar component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {Avatar as MuiAvatar} from '@mui/material';

type AvatarProps = {
  label?: string;
  size?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  ml?: string | number;
  mr?: string | number;
}

const colorMap = [
  {bgcolor: "#b8e994", color: "#10ac84"},
  {bgcolor: "#fbeaec", color: "#d99e98"},
  {bgcolor: "#dbf2f1", color: "#60a5a8"},
  {bgcolor: "#fef3ce", color: "#c1983b" },
  {bgcolor: "#d6ebff", color: "#6f9ee2" },
  {bgcolor: "#dbf5da", color: "#52955f" },
  {bgcolor: "#fce9d1", color: "#cf9f70" }
];

const sizeMap = {
  xl: {width: 130, height: 130, fontSize: 75},
  lg: {width: 100, height: 100, fontSize: 60},
  md: {width: 100, height: 100, fontSize: 22},
  sm: {width: 30, height: 30, fontSize: 22},
  xs: {width: 24, height: 24, fontSize: 14, marginLeft: '4px'}
};

const Avatar = ({
  label,
  size = 'sm',
  ml = 0,
  mr = 0,
}: AvatarProps) => {
  const colorBox = colorMap[Math.floor(Math.random() * (colorMap.length - 1))];
  return (
    <MuiAvatar 
      sx={{ 
        ...colorBox,
        fontWeight: 500,
        marginLeft: ml,
        marginRight: mr,
        ...sizeMap[size], 
      }}>{label}
    </MuiAvatar>
  )
}

export default Avatar;