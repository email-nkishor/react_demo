import './App.css';
import { increment, decrement,incrementWithValue } from './redux/actions';
import { connect } from 'react-redux';

function CounterExample1({ count, increment, decrement,incrementWithValue }) {
  return (
    <div className="App">
      <h1>Redux Counter mapStateToProps and mapDispatchToProps</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementWithValue(5)}>Increment by 5</button>
      <button onClick={() => incrementWithValue(3)}>Increment by 3</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  incrementWithValue
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterExample1);

