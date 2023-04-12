import React from 'react';
import Card from './ui/card/Card';
import { useSelector } from 'react-redux';

function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <header>
      <Card>
        {!isAuth && <p>No user is logged in</p>}
        {isAuth && <button>Logout</button>}
      </Card>
    </header>
  );
}

export default Header;
