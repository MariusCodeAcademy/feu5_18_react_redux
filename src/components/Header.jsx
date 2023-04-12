import React from 'react';
import Card from './ui/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  // logout in header
  function logoutHandler() {
    dispatch(authActions.logout());
  }
  return (
    <header>
      <Card>
        {!isAuth && <p>No user is logged in</p>}
        {isAuth && <button onClick={logoutHandler}>Logout</button>}
      </Card>
    </header>
  );
}

export default Header;
