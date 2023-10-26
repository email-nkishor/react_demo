import './App.css';
import { increment, decrement, incrementWithValue } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux'


function CounterExample2() {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux Counter with dispatch</h1>
      <p>Count: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementWithValue(5))}>Increment by 5</button>
      <button onClick={() => dispatch(incrementWithValue(3))}>Increment by 3</button>

    </div>
  );
}



export default CounterExample2;

