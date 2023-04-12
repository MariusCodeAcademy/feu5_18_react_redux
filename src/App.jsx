import './styles/reset.css';
import './styles/App.css';
import Counter from './components/Counter';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="container">
      <h1>Redux {counter}</h1>
      <Counter />
    </div>
  );
}
export default App;
