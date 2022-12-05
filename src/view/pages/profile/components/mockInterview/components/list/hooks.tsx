/**
 * 
 * Mock Interview delete hook page component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';

// GENERIC IMPORT 
import {AlertPopup} from '@/view/molecules';
import useNotification from '@/utils/notification';

export function useDeleteMockInterviewPopup() {
    // DECLARE NOTIFICATION
    const setNotification = useNotification();
    const [{isOpen, id}, setPopupOpen] = useState<{
        isOpen: boolean;
        id: number | null;
    }>({isOpen: false, id: null});

    const close = () => setPopupOpen({isOpen: false, id: null});

    const onConfirm = () => {
        close();
        setNotification.success("Mock Interview deleted successfully!");
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
        setPopupOpen({isOpen: true, id}),
        child,
    };
}
