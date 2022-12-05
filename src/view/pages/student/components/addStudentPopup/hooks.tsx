
/**
 * 
 * Add Student hooks component
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
import AddStudentPopup from './index';

// DEFAULT COMPONENT
export function useAddStudentPopup() {

  // DECALRE STATE
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  // CLOSE METHOD
  const close = () => setPopupOpen({isOpen: false, id: null});

  // COMPONENT FORM
  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={id ? 'Edit student' : 'New student'}
      customWidth={500}
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <AddStudentPopup onClose={close} studentId={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
