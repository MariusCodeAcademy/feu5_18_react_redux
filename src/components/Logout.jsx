import React from 'react';
import { authActions } from '../store/_auth';
import { useDispatch, useSelector } from 'react-redux';

function Logout() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(authActions.logout());
  }

  return isAuth ? <button onClick={logoutHandler}>Logout</button> : null;
}

export default Logout;
