import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import ViewStudentPopup from './index';

export function useViewStudentPopup() {
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  const close = () => setPopupOpen({isOpen: false, id: null});

  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title={'View student'}
      maxWidth={'xs'}
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <ViewStudentPopup onClose={close} studentId={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
