/**
 * 
 * View Task hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';
import {Popup} from '@/view/molecules';
import ViewTaskPopup from './index';

export function useViewTaskPopup() {
  const [{isOpen}, setPopupOpen] = useState<{
    isOpen: boolean;
  }>({isOpen: false});

  const close = () => setPopupOpen({isOpen: false});

  const child = isOpen && (
    <Popup
      isOpen
      onClose={close}
      title='View Task'
      maxWidth='md'
      fullWidth
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <ViewTaskPopup onClose={close}/>
      </Box>
    </Popup>
  );

  return {
    show: () =>
      setPopupOpen({isOpen: true}),
    child,
  };
}
