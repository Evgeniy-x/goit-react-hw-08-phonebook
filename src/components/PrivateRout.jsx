import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserIsLogIn, getUserIsRefresh } from 'redux/auth/selectors';

const PrivateRout = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getUserIsLogIn);
  const isRefreshing = useSelector(getUserIsRefresh);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRout;
