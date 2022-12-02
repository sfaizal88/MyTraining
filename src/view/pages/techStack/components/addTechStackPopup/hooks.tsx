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

export function useAddTechStackPopup() {
  const [{isOpen, selectedId}, setPopupOpen] = useState<{
    isOpen: boolean;
    selectedId: number | null;
  }>({isOpen: false, selectedId: null});

  const close = () => setPopupOpen({isOpen: false, selectedId: null});

  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={selectedId ? 'Edit technology' : 'New technology'}
      fullWidth
      maxWidth='lg'
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <AddTechStackPopup onClose={close} id={selectedId} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, selectedId: id}),
    child,
  };
}
