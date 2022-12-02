/**
 * 
 * App component
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import {useState} from 'react';
import {Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// GENERIC COMPONENT IMPORT
import {Notification} from '@/view/molecules';

// ROUTER IMPORT
import EntryRoutes from '@/view/routes/entryRoutes';

// THEME IMPORT
import theme from './theme';

// CONTEXT IMPORT
import {NotificationContext} from '@/contexts/notificationContext';

// MODEL IMPORT
import {NotificationContextType} from '@/models/notification';
import {NotificationType} from '@/utils/enum';

// STYLE IMPORT
import useStyles from '@/view/routes/styles';

// REACT QUERY PROVIDER
const queryClient = new QueryClient()

function App() {
  // STYLE DECLARE
  const classes = useStyles();

  // STATE DECLARE
  const [notification, setNotification] = useState<NotificationContextType>({
    type: NotificationType.success,
    message: '',
    isOpen: false,
  });

  // GENERAL DECLARE VARIABLE
  const value = { notification, setNotification };

  // RENDER HTML
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.mainLayout}>
        <QueryClientProvider client={queryClient}>
            <NotificationContext.Provider value={value}>
                <EntryRoutes/>
                <Notification {...value.notification} setNotification={setNotification}/>
            </NotificationContext.Provider>
        </QueryClientProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;