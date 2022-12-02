import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import AddStudentPopup from './index';

export function useAddStudentPopup() {
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  const close = () => setPopupOpen({isOpen: false, id: null});

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
