import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import Router from './Router.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import ScrollToTop from './utils/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  </ThemeProvider>,
);
