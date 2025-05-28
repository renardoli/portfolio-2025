import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';

function Router() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
    </Routes>
  );
}

export default Router;
