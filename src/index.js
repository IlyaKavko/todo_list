import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './component/AppHeader';
import SearchBlock from './component/SearchBlock';
import TodoList from './component/TodoList';


const App = () => {
  return (
    <div>
    <AppHeader />
    <SearchBlock />
    <TodoList />
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));