import './App.css';
import CounterExample1 from './CounterExample1';
import CounterExample2 from './CounterExample2';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      <CounterExample1 />
      <CounterExample2 />
    </div>
  );
}

export default App;

