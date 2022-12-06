/**
 * 
 * Add Mentor hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';

// GENERIC COMPONENT IMPORT 
import {Popup} from '@/view/molecules';

// MENTIOR IMPORT
import AddMentorPopup from './index';

// HOOK FUNCTION
export function useAddMentorPopup() {
  // DECLARE STATE
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  // CLOSE FUNCTION
  const close = () => setPopupOpen({isOpen: false, id: null});

  // POPUP COMPONENT
  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={id ? 'Edit mentor' : 'New mentor'}
      customWidth={500}
    >
      <Box height="100%" minHeight={100} display="flex" margin="auto">
        <AddMentorPopup onClose={close} id={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
