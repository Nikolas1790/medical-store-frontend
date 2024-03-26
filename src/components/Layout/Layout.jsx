import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';

export default function Layout() {
  const location = useLocation();
  const hideHeaderPaths = [ '/login'];
  return (
    <div>
     {hideHeaderPaths.includes(location.pathname) ? null : <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />  
        </Suspense>
      </main> 
    </div>
  );
};