import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Header />
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="page-content"
      >
        {children}
      </motion.main>
      <Footer />
    </AnimatePresence>
  );
};

export default Layout;
