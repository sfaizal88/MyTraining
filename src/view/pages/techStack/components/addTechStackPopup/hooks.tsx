/**
 * 
 * Add TechStack hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import AddTechStackPopup from './index';

// ADD TECH STACK HOOK
export function useAddTechStackPopup() {
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
      title={id ? 'Edit technology' : 'New technology'}
      maxWidth='lg'
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <AddTechStackPopup onClose={close} id={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
