import { Route, Routes } from 'react-router';
import PageNotFound from './pages/404';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';

function Router() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
