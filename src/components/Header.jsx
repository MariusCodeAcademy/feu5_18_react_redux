import React from 'react';
import Card from './ui/card/Card';
import { useSelector } from 'react-redux';
import Logout from './Logout';

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  // const dispatch = useDispatch();
  // logout in header
  // function logoutHandler() {
  //   dispatch(authActions.logout());
  // }
  return (
    <header>
      <Card>
        {!isAuth && <p>No user is logged in</p>}
        {isAuth && <Logout />}
      </Card>
    </header>
  );
}

export default Header;
