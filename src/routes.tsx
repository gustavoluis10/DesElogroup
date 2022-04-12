import { Routes, Route } from 'react-router-dom';

import { NewUser } from './views/NewUser/newUser';
import { Leads } from './views/Leads/leads';

export const RouteApp = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/"  element={<NewUser/>} />
      <Route path="/leads" element={<Leads/>} />
    </Routes>
  );
};