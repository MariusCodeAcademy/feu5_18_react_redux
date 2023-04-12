import './styles/reset.css';
import './styles/App.css';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Header from './components/Header';

function App() {
  const counter = useSelector((state) => state.counter.counter);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="container">
      <Header />
      <h1>Redux {counter}</h1>

      {!isAuth && <LoginForm />}
      {isAuth && <UserProfile />}
      <Counter />
    </div>
  );
}
export default App;
