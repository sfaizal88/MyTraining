/**
 * 
 * ChipTech component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Link} from '@mui/material';
import {VideocamOutlined, MenuBookOutlined} from '@mui/icons-material';

// ICON IMPORT
import LoaderIcon from '@/assets/icons/loader.svg';

// STYLE IMPORT
import useStyles from './styles';

type ChipTechProps = {
  label: string;
  videoLink?: string;
  tutorialLink?: string;
}

const ChipTech = ({
  label,
  videoLink,
  tutorialLink,
}: ChipTechProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.chipTechBox}> 
      {label}
      {videoLink && <Link target="_blank" href={videoLink} underline="none" color={'#636e72'} className={classes.videoIcon}><VideocamOutlined /></Link>} 
      {tutorialLink && <Link target="_blank" href={tutorialLink} underline="none" color={'#636e72'} className={classes.tutorialIcon}><MenuBookOutlined /></Link>}
    </Box>
  )
}

export default ChipTech;