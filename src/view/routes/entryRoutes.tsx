/**
 * 
 * Entry Routes
 * @author - NA 
 * @date - 3th September, 2022
 * 
 */
// GENERIC IMPORT
import { BrowserRouter ,Route, Routes } from 'react-router-dom';

// ROUTER IMPORT
import AppRoutes from '@/view/routes/appRoutes';
import * as PATH from '@/view/routes/constants';

// PAGE COMPONENT IMPORT
import Login from '@/view/pages/login';

// ENTRY ROUTER VARIABLE DECLARE
const EntryRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.LOGIN_PATH} element={<Login />}/>
      <Route path={PATH.OTHER_PATH} element={<AppRoutes />}/>
    </Routes>
  </BrowserRouter>
);

// EXPORT COMPONENT
export default EntryRoutes;
