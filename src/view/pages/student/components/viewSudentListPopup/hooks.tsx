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

// STUDENT IMPORT
import ViewStudentListPopup from './index';

// HOOK FUNCTION
export function useViewStudentListPopup() {
  // DECLARE STATE
  const [{isOpen, ids}, setPopupOpen] = useState<{
    isOpen: boolean;
    ids: number[] | null;
  }>({isOpen: false, ids: null});

  // CLOSE POPUP
  const close = () => setPopupOpen({isOpen: false, ids: null});

  // COMPONENT 
  const child = isOpen && ids && (
    <Popup
      isOpen
      onClose={close}
      title='View students'
      maxWidth='lg'
      fullWidth
    >
      <Box height="100%" minHeight={100} display="flex" margin="auto">
        <ViewStudentListPopup onClose={close} ids={ids} />
      </Box>
    </Popup>
  );

  return {
    show: (ids: number[] | null = null) =>
      setPopupOpen({isOpen: true, ids}),
    child,
  };
}
