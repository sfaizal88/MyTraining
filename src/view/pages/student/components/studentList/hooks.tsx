import {useState} from 'react';
import {AlertPopup} from '@/view/molecules';
import useNotification from '@/utils/notification';

export function useDeleteStudentPopup() {
    // DECLARE NOTIFICATION
    const setNotification = useNotification();
    const [{isOpen, selectedId}, setPopupOpen] = useState<{
        isOpen: boolean;
        selectedId: number | null;
    }>({isOpen: false, selectedId: null});

    const close = () => setPopupOpen({isOpen: false, selectedId: null});

    const onConfirm = () => {
        console.log("Delete this student: ", selectedId);
        close();
        setNotification.success("Student deleted successfully!");
    }

    const child = isOpen && (
        <AlertPopup 
            isOpen={isOpen}
            title="Delete" 
            onClose={close} 
            onSubmit={onConfirm}
            submitLabel="Delete"
            content="Do you wish to delete?"
        />
    );

    return {
        show: (id: number | null = null) =>
        setPopupOpen({isOpen: true, selectedId: id}),
        child,
    };
}
