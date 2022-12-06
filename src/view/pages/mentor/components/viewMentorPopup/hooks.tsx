/**
 * 
 * View Mentor hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import ViewMentorPopup from './index';

export function useViewMentorPopup() {
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  const close = () => setPopupOpen({isOpen: false, id: null});

  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title='View Mentor'
      maxWidth={'xs'}
    >
      <Box height="100%" minHeight={100} display="flex" margin="auto">
        <ViewMentorPopup onClose={close} id={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
