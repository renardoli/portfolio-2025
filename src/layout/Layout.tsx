import Footer from '../components/Footer';
import Header from '../components/Header';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="container px-8 pt-5 pb-20 flex flex-col gap-8 lg:py-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
