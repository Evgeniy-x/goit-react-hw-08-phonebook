import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { getUserName } from 'redux/auth/selectors';
import { LogOutBtn, Text } from './UserMenu.styled';

const UserMenu = () => {
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <>
      <Text>Welcome {userName}</Text>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutBtn>
    </>
  );
};

export default UserMenu;
