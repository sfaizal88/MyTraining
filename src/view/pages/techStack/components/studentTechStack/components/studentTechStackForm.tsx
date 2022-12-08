/**
 * 
 * Student Tech Stack page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import { Box, Stack, Divider } from '@mui/material';
import {useForm} from 'react-hook-form';
import {VideocamOutlined, ArticleOutlined, CodeOffOutlined} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {IconField, AddButton, Loader, NumberField} from '@/view/atoms';
import {TitleLayout, ChipTech, EmptyScreen, FormAction} from '@/view/molecules';
import {AssignTechStackModal} from '@/view/organisms';

// API IMPORT
import {TechStackGet, TechStackGetItem, useUpdateTechStackTopicsByUserIdMutation} from '@/api/techStack/techStack';

// HOOK
import {useProfileDetails} from '@/view/pages/profile/hook';

// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';
import useNotification from '@/utils/notification';

// TECH STACK IMPORT
import {preparePostData} from '../helper';

// STYLE IMPORT
import useStyles from '../styles';

// PROPS TYPE
type StudentTechStackFormProps = {
    studentId: number;
    role: UserRoleType;
    data: TechStackGetItem[];
}

// STUDENT TECH STACK SCREEN COMPONENT DECLARE
const StudentTechStackForm = ({
    studentId,
    role,
    data,
}: StudentTechStackFormProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // STATE DECLARE
    const [isOpen, setOpen] = useState(false);

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // API DECLARE
    const updateTechStackTopicsByUserIdMutation = useUpdateTechStackTopicsByUserIdMutation(studentId);

    // REACT HOOK FORM
    const {control, handleSubmit, register, formState: { errors }, setValue, watch} = useForm<TechStackGet>({
        defaultValues: {tech_stack: data},
        mode: 'onChange',
    });
    const formData = watch();

    // DECLARE HOOK CALL
    const profileDetails = useProfileDetails({role});

    const onSubmit = (postData: TechStackGet) => {
        // FORMING POST RESPONSE
        updateTechStackTopicsByUserIdMutation.mutate(preparePostData(postData), {
            onSuccess: (response: any) => {
              // IF ERROR COMES
              if (response.code === -1) {
                setNotification.error();
              } else {
                setNotification.success();
              }
            },
            onError(e: unknown) {
              setNotification.error(e); 
            },
        });
    }

    return (
        <Box className={classes.profileContentLayout}>
            {data.length > 0 ? 
                <>
                    {profileDetails.isLoginUserMentor() && <Box ml={4} mb={2}>
                        <AddButton 
                            customLabel='Assign technology stack' 
                            onClick={() => setOpen(true)}
                            type="button"/>
                    </Box>}
                    <Box className={classes.content}>
                            {data.map((item: TechStackGetItem, index: number) => 
                                <Box key={item.id} mb={2}>
                                    <NumberField
                                        name={`tech_stack[${index}].id`}
                                        id={`tech_stack[${index}].id`}
                                        control={control}
                                        register={register}
                                        hidden
                                        defaultValue={item.id}
                                    />
                                    <NumberField
                                        name={`tech_stack[${index}].student_id`}
                                        id={`tech_stack[${index}].student_id`}
                                        control={control}
                                        register={register}
                                        hidden
                                        defaultValue={studentId}
                                    />
                                    <TitleLayout 
                                        title={item.title}
                                        info={`${formData.tech_stack?.[index].tech_details.filter(formItem => formItem.isSelected).length}/${item.tech_details.length} completed`}
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
                                        <Box key={`${item.id}-${techIndex}`} component='span'>
                                            <ChipTech 
                                                label={tech.title}
                                                
                                                {...{register, control, setValue, errors}}
                                                name={`tech_stack[${index}].tech_details[${techIndex}].isSelected`}
                                                showCheckbox={profileDetails.isLoginUserStudent()}
                                                showTick={profileDetails.isLoginUserMentor()}
                                                defaultValue={formData.tech_stack?.[index].tech_details?.[techIndex].isSelected}/>
                                                <NumberField
                                                    name={`tech_stack[${index}].tech_details[${techIndex}].id`}
                                                    id={`tech_stack[${index}].tech_details[${techIndex}].id`}
                                                    control={control}
                                                    register={register}
                                                    hidden
                                                    defaultValue={tech.id}
                                            />
                                        </Box>
                                    )}
                                    </Box>
                                </Box>
                            )}
                        </Box>
                        {profileDetails.isLoginUserStudent() && 
                        <Box className={classes.footer}>
                            <FormAction
                                showSubmit
                                submitLabel="Save"
                                onSubmit={handleSubmit(onSubmit)}
                            />
                        </Box>}
                    </> : (
                    <EmptyScreen
                        title={'No Technology stack assigned'}
                        subtitle={!profileDetails.isLoginUserStudent() ? 'Assign new technology stack by clicking assign technology stack button' : ''}
                        button={<AddButton customLabel='Assign technology stack' onClick={() => setOpen(true)} type="button" show={profileDetails.isLoginUserMentor()}/>}
                        icon={<CodeOffOutlined style={{fontSize: 46}}/>}
                        showButton={profileDetails.isLoginUserMentor()}
                    />
                )}
            {isOpen && <AssignTechStackModal userId={studentId} isOpen={isOpen} onClose={() => setOpen(false)}/>}
        </Box>
    )
}

export default StudentTechStackForm;