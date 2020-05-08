import React from 'react';

import TodoListItem from '../TodoListItem';

import "./todoList.css";

const TodoList = ( {todoData} ) => {

  const elements = todoData.map((element) => {

    const { id, ...otherProps} = element

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...otherProps} />
      </li>
    );
  });

    return (
      <ul className="list-group todo-list">
        { elements }
      </ul>
    );
};

export default TodoList;