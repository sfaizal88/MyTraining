/**
 * 
 * Profile Header page component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERCI IMPORT
import {useContext} from 'react';
import {Download} from '@mui/icons-material';
import { Box, Avatar, Stack, Divider } from '@mui/material';

// GENERIC IMPORT 
import {Button} from '@/view/atoms';
import {SocialMedia} from '@/view/molecules';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// STYLE IMPORT
import useStyles from '../../styles';

// REPORT SCREEN COMPONENT DECLARE
const ProfileHeader = () => {
    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);

    // STYLE DECLARE
    const classes = useStyles();
    return (
        <Box className={classes.profileHeader}>
            <Box width="120">
                <Avatar sx={{ width: 100, height: 100 }}>{profileContext.name[0]}</Avatar>
            </Box>
            <Box className={classes.profileContent}>
                <Box className={classes.profileTitle}>{profileContext.name}</Box>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    className={classes.profileDetails}
                    mt={1}
                >
                    <Box>{profileContext.email}</Box>
                    <Box>{profileContext.contact_no}</Box>
                </Stack>
                <SocialMedia
                    showLinkedIcon
                    showGithubIcon
                    showWebIcon
                />
            </Box>
            <Box className={classes.profileBtnContainer}>
                <Button  variant="contained" onClick={() => console.log("Download resume")}>
                <Download style={{fontSize: 20, marginRight: '8px'}}/>View Resume</Button>
            </Box>
        </Box>
    )
}

export default ProfileHeader;