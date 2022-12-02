/**
 * 
 * Add Teacher hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import AddTeacherPopup from './index';

export function useAddTeacherPopup() {
  const [{isOpen, selectedId}, setPopupOpen] = useState<{
    isOpen: boolean;
    selectedId: number | null;
  }>({isOpen: false, selectedId: null});

  const close = () => setPopupOpen({isOpen: false, selectedId: null});

  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={selectedId ? 'Edit teacher' : 'New teacher'}
      customWidth={500}
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <AddTeacherPopup onClose={close} id={selectedId} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, selectedId: id}),
    child,
  };
}
