/**
 * 
 * Assign Tech stack Modal component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
    
// GENERIC IMPORT 
import {NumberField, SelectField} from '@/view/atoms';
import {AlertPopup, FormRow} from '@/view/molecules';

// API IMPORT
import {useTechStackOptionsQuery, TechStackAssignPostItem, useAssignTechStackToUserMutation} from '@/api/techStack/techStack';

// MODAL IMPORT
import schema from './schema';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from './styles';

type AssignTechStackModalProps = {
    userId: number;
    isOpen: boolean;
    onClose: () => void;
}

const AssignTechStackModal = ({
    userId,
    isOpen,
    onClose,
}: AssignTechStackModalProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const techStackOptionsQuery = useTechStackOptionsQuery();
    const assignTechStackToUserMutation = useAssignTechStackToUserMutation(userId);

    const {control, handleSubmit, register, formState: { errors }} = useForm<TechStackAssignPostItem>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData: TechStackAssignPostItem) => {
        console.log("Submit...", formData);
        assignTechStackToUserMutation.mutate(formData, {
            onSuccess: () => {
                setNotification.success();
                onClose();
            },
            onError(e: unknown) {
                setNotification.error();
                
            },
        });
    }

    // IF API LOADS, TURN ON LOADER
    if (!techStackOptionsQuery.data) return null;

    return (
        <AlertPopup 
            isOpen={isOpen}
            title="Assign technology stack" 
            onClose={onClose} 
            closeLabel="Cancel"
            onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
            submitLabel="Assign"
            content={
                    <FormRow label="Assign technology stack" isRow>
                        <SelectField
                            register={register}
                            id="tech_stack_id"
                            name="tech_stack_id"
                            control={control}
                            placeholder="Select Technology stack"
                            errors={errors?.tech_stack_id}
                            emptyOptionLabel="Select Technology stack"
                            options={techStackOptionsQuery.data}
                        />
                        <NumberField
                            id="student_id"
                            name="student_id"
                            control={control}
                            register={register}
                            hidden
                            defaultValue={userId}
                        />
                    </FormRow>
            }
        />
    )
}

export default AssignTechStackModal;