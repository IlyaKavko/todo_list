import React from 'react';

import './appHeader.css';

const AppHeader = (props) => {

    const {toDo, done} = props

    return (
        <div className="AppHeader">
            <h1>Todo list</h1>
            <p className="todoCounter">
                <span> to do - { toDo }</span>
                <span> done - { done } </span>
            </p>
        </div>
    );
};

export default AppHeader;