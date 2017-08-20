import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Login from './Login';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';

function ListTodo(props) {
  const todos = props.todos;
  const listTodos = todos.map(todo =>
    <li key={todo.id}>
      {todo.task}
    </li>
  );

  return (
    <ul>{listTodos}</ul>
  );
}
let Todos = [
  {
    task: "Coding",
    id: 1
  },
  {
    task: "Cooking",
    id: 2
  },
  {
    task: "Playing",
    id: 3
  }
];


const wrapper = (
  <div>
    <App />
    <Login />
    <ListTodo todos={Todos} />
    <Calculator />
  </div>
);

ReactDOM.render(
  wrapper,
  document.getElementById('root')
);
registerServiceWorker();
