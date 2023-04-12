// sukuriam komponenta
import React, { useState } from 'react';
import Card from './ui/card/Card';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(authActions.login());
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
}

export default LoginForm;

// sukuriam forma su email ir password

// sukuriam funkcija kuri vyks pateikiant forma

// pateikiant forma ivygdyti logi funkcija is store

// atvaizduot jsx ar siuo metu esam prisilogine ar ne
