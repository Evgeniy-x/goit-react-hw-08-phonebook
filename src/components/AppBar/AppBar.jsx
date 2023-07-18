import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import css from './AppBar.module.css';
import { getUserIsLogIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(getUserIsLogIn);
  return (
    <>
      <header className={css.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
};

export default AppBar;
