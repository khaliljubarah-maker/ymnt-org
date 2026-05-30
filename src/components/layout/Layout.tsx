import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
