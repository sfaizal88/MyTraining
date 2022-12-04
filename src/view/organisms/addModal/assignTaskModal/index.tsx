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
import {useTaskOptionsQuery, TaskAssignPostItem, useAssignTaskToUserMutation} from '@/api/task/task';

// MODAL IMPORT
import schema from './schema';

// UTILS IMPORT
import useNotification from '@/utils/notification';

// STYLE IMPORT
import useStyles from './styles';

type AssignTaskModalProps = {
    userId: number;
    isOpen: boolean;
    onClose: () => void;
}

const AssignTaskModal = ({
    userId,
    isOpen,
    onClose,
}: AssignTaskModalProps) => {
    // STYLE DECLARE
    const classes = useStyles();

    // DECLARE NOTIFICATION AND NAVIDATE
    const setNotification = useNotification();

    // DECLARE API CALL
    const taskOptionsQuery = useTaskOptionsQuery();
    const assignTaskToUserMutation = useAssignTaskToUserMutation(userId);

    const {control, handleSubmit, register, formState: { errors }} = useForm<TaskAssignPostItem>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = (formData: TaskAssignPostItem) => {
        console.log("Submit...", formData);
        assignTaskToUserMutation.mutate(formData, {
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