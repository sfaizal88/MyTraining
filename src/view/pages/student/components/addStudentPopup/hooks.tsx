import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import AddStudentPopup from './index';

export function useAddStudentPopup() {
  const [{isOpen, selectedStudentId}, setPopupOpen] = useState<{
    isOpen: boolean;
    selectedStudentId: number | null;
  }>({isOpen: false, selectedStudentId: null});

  const close = () => setPopupOpen({isOpen: false, selectedStudentId: null});

  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={selectedStudentId ? 'Edit student' : 'New student'}
      customWidth={500}
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <AddStudentPopup onClose={close} studentId={selectedStudentId} />
      </Box>
    </Popup>
  );

  return {
    show: (studentId: number | null = null) =>
      setPopupOpen({isOpen: true, selectedStudentId: studentId}),
    child,
  };
}
