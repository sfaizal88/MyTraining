
/**
 * 
 * Student List hooks component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {useState} from 'react';

// GENERIC COMPONENT IMPORT 
import {ConfirmPopup} from '@/view/molecules';

// UTILS IMPORT 
import useNotification from '@/utils/notification';

// API
import {useDeleteStudentMutation} from '@/api/student/student';

// DEFAULT COMPONENT
export function useDeleteStudentPopup() {
    // DECLARE NOTIFICATION
    const setNotification = useNotification();

    // DECLARE API CALL
    const deleteStudentMutation = useDeleteStudentMutation();

    // DECLCARE STATE
    const [{isOpen, id}, setPopupOpen] = useState<{
        isOpen: boolean;
        id: number | null;
    }>({isOpen: false, id: null});

    // CLOSE POPUP
    const close = () => setPopupOpen({isOpen: false, id: null});

    // DELETE API FUNCTION
    const onConfirm = () => {
      // CALLING DELETE API
      deleteStudentMutation.mutate(id, {
        onSuccess: (response) => {
          // IF ERROR COMES
          if (response.code === -1) {
            setNotification.error();
          } else {
            setNotification.success("Deleted successfully!");
          }
          close();
        },
        onError(e: unknown) {
          setNotification.error(e);
          
        },
      });
    }

    // ALERT POPUP
    const child = isOpen && (
        <ConfirmPopup 
            isOpen={isOpen}
            title="Delete" 
            onClose={close} 
            onSubmit={onConfirm}
            submitLabel="Delete"
            content="Are you sure you would like to delete it?"
            details="This action cannot be undone and will be permanently deleted."
        />
    );

    return {
        show: (id: number | null = null) =>
        setPopupOpen({isOpen: true, id}),
        child,
    };
}
