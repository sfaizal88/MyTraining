/**
 * 
 * Tech Stack page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext, useState} from 'react';
import { Paper, Box, Stack, Divider } from '@mui/material';
import {useForm, useFieldArray} from 'react-hook-form';
import {VideocamOutlined, ArticleOutlined, CodeOffOutlined} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {IconField, AddButton} from '@/view/atoms';
import {TitleLayout, ChipTech, EmptyScreen, FormAction} from '@/view/molecules';
import {AssignTechStackModal} from '@/view/organisms';

// API IMPORT
import {TechStackGet} from '@/api/techStack/techStack';

// CONTEXT IMPORT
import {ProfileContext} from '@/contexts/profileContext';

// HOOK
import {useProfileDetails} from '@/view/pages/profile/hook';

// STYLE IMPORT
import useStyles from '../../styles';

// TASK SCREEN COMPONENT DECLARE
const TechStack = () => {
    // STYLE DECLARE
    const classes = useStyles();

    // STATE DECLARE
    const [isOpen, setOpen] = useState(false);

    // REACT HOOK FORM
    const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<TechStackGet>({
        defaultValues: {} as TechStackGet,
        mode: 'onChange',
    });
    const formData = watch();

    // CONTEXT DECALRE
    const profileContext = useContext(ProfileContext);
    const techStack = profileContext.tech_stack;
    const userId = profileContext.id;

    // DECLARE HOOK CALL
    const profileDetails = useProfileDetails();

    const onSubmit = (postData: TechStackGet) => {
        console.log("postData: ", postData);
    }

    return (
        <Paper className={classes.profileContentLayout}>
            {techStack.length > 0 ? 
                <Box mb={3} className={classes.profileContainer}>
                    <Box className={classes.content}>
                        <AddButton 
                        customLabel='Assign technology stack' 
                        onClick={() => setOpen(true)}
                        type="button"
                        hide={!profileDetails.isLoginUserStudent()}/>
                            <Box mt={2} overflow="scroll" height="200">
                            {techStack.map((item, index) => 
                                <Box key={item.id} mb={2}>
                                    <TitleLayout 
                                        title={item.title}
                                        info={`0/${item.tech_details.length} completed`}
                                        rightChild={
                                            <Stack
                                                direction="row"
                                                divider={<Divider orientation="vertical" flexItem />}
                                                spacing={1}
                                                >
                                                <IconField link={item.video_url} icon={<VideocamOutlined/>} tooltip={item.video_url ? 'Tutorial video link' : 'Link not available'}/>
                                                <IconField link={item.tutorial_url} icon={<ArticleOutlined/>} tooltip={item.tutorial_url ? 'Tutorial document link' : 'Link not available'}/>
                                            </Stack>
                                        }
                                    />
                                    <Box>{item.tech_details.map((tech, techIndex) => 
                                        <ChipTech 
                                            label={tech.title}
                                            key={`${item.id}-${techIndex}`}
                                            {...{register, control, setValue, errors}}
                                            name={`tech_stack[${index}].tech_details[${techIndex}].isSelected`}
                                            disabled={!profileDetails.isLoginUserStudent()}
                                            showCheckbox
                                            defaultValue={formData.tech_stack?.[index].tech_details?.[techIndex].isSelected}/>
                                    )}
                                    </Box>
                                </Box>
                            )}
                            </Box>
                        </Box>
                        <Box className={classes.footer}>
                            <FormAction
                                showSubmit={profileDetails.isLoginUserStudent()}
                                submitLabel="Save"
                                onSubmit={handleSubmit(onSubmit)}
                            />
                        </Box>
                    </Box> : (
                    <EmptyScreen
                        title={'No Technology stack assigned'}
                        subtitle={!profileDetails.isLoginUserStudent() ? 'Assign new technology stack by clicking assign technology stack button' : ''}
                        button={<AddButton customLabel='Assign technology stack' onClick={() => setOpen(true)} type="button" hide={!profileDetails.isLoginUserStudent()}/>}
                        icon={<CodeOffOutlined style={{fontSize: 46}}/>}
                    />
                )}
            {isOpen && <AssignTechStackModal userId={userId} isOpen={isOpen} onClose={() => setOpen(false)}/>}
        </Paper>
    )
}

export default TechStack;