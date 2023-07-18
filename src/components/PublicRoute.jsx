import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserIsLogIn } from 'redux/auth/selectors';

const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getUserIsLogIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;
