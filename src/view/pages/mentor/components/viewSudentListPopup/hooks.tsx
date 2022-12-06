/**
 * 
 * View Student list hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';

// MENTOR IMPORT
import ViewStudentListPopup from './index';

// HOOK FUNCTION
export function useViewStudentListPopup() {
  // DECLARE STATE
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  // CLOSE POPUP
  const close = () => setPopupOpen({isOpen: false, id: null});

  // COMPONENT 
  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title='View students'
      maxWidth='lg'
      fullWidth
    >
      <Box height="100%" minHeight={100} display="flex" margin="auto">
        <ViewStudentListPopup onClose={close} id={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
