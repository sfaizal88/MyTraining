/**
 * 
 * Student Tech Stack page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useContext, useState} from 'react';
import { Box, Stack, Divider } from '@mui/material';
import {useForm} from 'react-hook-form';
import {VideocamOutlined, ArticleOutlined, CodeOffOutlined} from '@mui/icons-material';

// GENERIC COMPONENT IMPORT 
import {IconField, AddButton, Loader} from '@/view/atoms';
import {TitleLayout, ChipTech, EmptyScreen, FormAction} from '@/view/molecules';
import {AssignTechStackModal} from '@/view/organisms';

// API IMPORT
import {TechStackGet, TechStackGetItem} from '@/api/techStack/techStack';
import {useTechStackByStudentIdQuery} from '@/api/profile/profile';

// HOOK
import {useProfileDetails} from '@/view/pages/profile/hook';

// UTILS IMPORT
import {UserRoleType} from '@/utils/enum';

// STYLE IMPORT
import useStyles from '../styles';

// PROPS TYPE
type StudentTechStackFormProps = {
    studentId: number;
    role: UserRoleType;
}

// STUDENT TECH STACK SCREEN COMPONENT DECLARE
const StudentTechStackForm = ({
    studentId,
    role,
}: StudentTechStackFormProps) => {
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

    // API DECLARE
    const techStackByStudentIdQuery = useTechStackByStudentIdQuery(studentId);

    // DECLARE HOOK CALL
    const profileDetails = useProfileDetails({role});

    const onSubmit = (postData: TechStackGet) => {
        console.log("postData: ", postData);
    }

    if (!techStackByStudentIdQuery.data) return <Loader/>;
    console.log(techStackByStudentIdQuery.data)
    return (
        <Box className={classes.profileContentLayout}>
            {techStackByStudentIdQuery.data.length > 0 ? 
                <>
                    <Box className={classes.content}>
                        <AddButton 
                            customLabel='Assign technology stack' 
                            onClick={() => setOpen(true)}
                            type="button"
                            show={profileDetails.isLoginUserMentor()}/>
                            <Box>
                            {techStackByStudentIdQuery.data.map((item: TechStackGetItem, index: number) => 
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
                                            showCheckbox={profileDetails.isLoginUserStudent()}
                                            defaultValue={formData.tech_stack?.[index].tech_details?.[techIndex].isSelected}/>
                                    )}
                                    </Box>
                                </Box>
                            )}
                            </Box>
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