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
  const [{isOpen, selectedId}, setPopupOpen] = useState<{
    isOpen: boolean;
    selectedId: number | null;
  }>({isOpen: false, selectedId: null});

  // CLOSE FUNCTION
  const close = () => setPopupOpen({isOpen: false, selectedId: null});

  // POPUP COMPONENT
  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={selectedId ? 'Edit mentor' : 'New mentor'}
      customWidth={500}
    >
      <Box height="100%" minHeight={100} display="flex" margin="auto">
        <AddMentorPopup onClose={close} id={selectedId} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, selectedId: id}),
    child,
  };
}
