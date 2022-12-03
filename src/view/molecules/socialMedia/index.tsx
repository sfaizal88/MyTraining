/**
 * 
 * Social Media component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {Box, Link} from '@mui/material';
import {LinkedIn, GitHub, Language} from '@mui/icons-material';

// STYLE IMPORT
import useStyles from './styles';

type SocialMediaProps = {
    showLinkedIcon?: boolean;
    linkedLink?: string;
    showGithubIcon?: boolean;
    githubLink?: string;
    showWebIcon?: boolean;
    webLink?: string;
}

const SocialMedia = ({
    showLinkedIcon,
    linkedLink = "#",
    showGithubIcon,
    githubLink = "#",
    showWebIcon,
    webLink = "#",
}: SocialMediaProps) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {showLinkedIcon && <Box><Link href={linkedLink} underline="none" target="_blank"><LinkedIn style={{fontSize: 22, color: '#007ab5'}}/></Link></Box>}
            {showGithubIcon && <Box><Link href={githubLink} underline="none" target="_blank"><GitHub style={{fontSize: 22, color: '#222'}}/></Link></Box>}
            {showWebIcon && <Box><Link href={webLink} underline="none" target="_blank"><Language style={{fontSize: 22, color: '#007ab5'}}/></Link></Box>}
        </Box>
    )
}

export default SocialMedia;