/**
 * 
 * Mentor hooks
 * @author - NA 
 * @date - 1st December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';

// GENERIC VIEW IMPORT 
import {AlertPopup} from '@/view/molecules';

// UTILS IMPORT
import useNotification from '@/utils/notification';

export function useDeleteMentorPopup() {
    // DECLARE NOTIFICATION
    const setNotification = useNotification();
    const [{isOpen, selectedId}, setPopupOpen] = useState<{
        isOpen: boolean;
        selectedId: number | null;
    }>({isOpen: false, selectedId: null});

    const close = () => setPopupOpen({isOpen: false, selectedId: null});

    const onConfirm = () => {
        close();
        setNotification.success("Mentor deleted successfully!");
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
