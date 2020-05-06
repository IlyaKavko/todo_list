import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './component/AppHeader/AppHeader';
import SearchBlock from './component/SearchBlock/SearchBlock';
import TodoList from './component/TodoList/TodoList';

const App = () => {

  const todoData = [
    {label: 'Learn HTML', important: false, id: 1 },
    {label: 'Learn JS', important: true, id: 2 },
    {label: 'Learn React', important: false, id: 3 },
  ];

  return (
    <div>
    <AppHeader />
    <SearchBlock />
    <TodoList todoData={todoData} />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('rootTWO'));