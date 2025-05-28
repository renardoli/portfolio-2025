import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';

function Router() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default Router;
