// import { useAuth } from '../hooks/useAyth';
// import { Navigate } from 'react-router-dom';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();

//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

import { useAuth } from '../hooks/useAyth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuth();
console.log(isLoggedIn)

  return isLoggedIn ? <Navigate to='/login' /> : Component;
};