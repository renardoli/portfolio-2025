import { Route, Routes } from 'react-router';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';

function Router() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/timeline" element={<Timeline />} />
    </Routes>
  );
}

export default Router;
