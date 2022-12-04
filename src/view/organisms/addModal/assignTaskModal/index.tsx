/**
 * 
 * Assign Task Modal component
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
import {useTaskOptionsQuery} from '@/api/task/task';

// MODAL IMPORT
import schema from './schema';

// STYLE IMPORT
import useStyles from './styles';

type AssignTaskModalProps = {
    userId: number;
    isOpen: boolean;
    onClose: () => void;
}

type SubmitForm = {
    userId: number;
    name: number;
}

const AssignTaskModal = ({
    userId,
    isOpen,
    onClose,
}: AssignTaskModalProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE API CALL
    const taskOptionsQuery = useTaskOptionsQuery();

    const {control, handleSubmit, register, formState: { errors }} = useForm<SubmitForm>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData: SubmitForm) => {
        console.log("Submit...", formData);
    }

    // IF API LOADS, TURN ON LOADER
    if (!taskOptionsQuery.data) return null;

    return (
        <AlertPopup 
            isOpen={isOpen}
            title="Assign task" 
            onClose={onClose} 
            closeLabel="Cancel"
            onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}
            submitLabel="Assign"
            content={
                    <FormRow label="Assign task" isRow>
                        <SelectField
                            register={register}
                            id="name"
                            name="name"
                            control={control}
                            placeholder="Select task"
                            errors={errors?.name}
                            emptyOptionLabel="Select task"
                            options={taskOptionsQuery.data}
                        />
                        <NumberField
                            id="userId"
                            name="userId"
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

export default AssignTaskModal;