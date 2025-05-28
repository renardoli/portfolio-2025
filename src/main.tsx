import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import Router from './Router.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
);
