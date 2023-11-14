import './App.css';
import MyComponent from './MyComponent'
import TodoList from './TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <h1>Higher Order Component Example</h1>
      <MyComponent customData={'Nand Kishor'}/>
      <h2>..............................</h2>
      <br/>
      <div>
      <TodoList />
    </div>
    </div>
  );
}

export default App;
