import TestProps from './props/demoProps'
import './App.css';
import TodoList from './todoList/ListLi'
import * as Object from'./props/objectProps'
function App() {
  return (
    <div>
      <TodoList></TodoList>
      <TestProps products = {Object.props} />
    </div>
  );
}

export default App;
