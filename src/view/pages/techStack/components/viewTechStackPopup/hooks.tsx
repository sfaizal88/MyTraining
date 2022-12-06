/**
 * 
 * View TechStack hook
 * @author - NA 
 * @date - 3th December, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';

// GENERIC VIEW IMPORT 
import {Popup} from '@/view/molecules';

// TECH STACK IMPORT
import ViewTechStackPopup from './index';

export function useViewTechStackPopup() {
  // DECLCARE STATE
  const [{isOpen, id}, setPopupOpen] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({isOpen: false, id: null});

  // CLOSE POPUP
  const close = () => setPopupOpen({isOpen: false, id: null});

  // CHILD
  const child = isOpen && id &&(
    <Popup
      isOpen
      onClose={close}
      title='View TechStack'
      maxWidth='md'
    >
      <Box height="100%" minHeight={200} display="flex" margin="auto">
        <ViewTechStackPopup onClose={close} id={id} />
      </Box>
    </Popup>
  );

  return {
    show: (id: number | null = null) =>
      setPopupOpen({isOpen: true, id}),
    child,
  };
}
