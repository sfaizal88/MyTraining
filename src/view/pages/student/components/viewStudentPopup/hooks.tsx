/**
 * 
 * View student hooks component
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT 
import {useState} from 'react';
import {Box} from '@mui/material';

// GENERIC COMPONENT IMPORT
import {Popup} from '@/view/molecules';

// STUDENT IMPORT
import ViewStudentPopup from './index';

// HOOK COMPONENT
export function useViewStudentPopup() {
  // DECLARE STATE
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  // CLOSE POPUP
  const close = () => setPopupOpen({isOpen: false, id: null});

  // COMPONENT 
  const child = isOpen && id && (
    <Popup
      isOpen
      onClose={close}
      title={'View student'}
      maxWidth={'xs'}
    >
      <Box height="100%" minHeight={100} display="flex" margin="auto">
        <ViewStudentPopup onClose={close} id={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
