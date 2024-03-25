import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export default function Layout() {
  return (
    <div>
     <p>cacacaccacaacacacacacaca</p>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />  
        </Suspense>
      </main> 
    </div>
  );
};