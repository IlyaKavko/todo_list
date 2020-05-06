import React from 'react';

import "./todoListItem.css";

const ToboListItem = ({ label, important }) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        <div className="todo-list-item">
            <span className="todo-list-lable" style={style}> { label } </span>
            <botton className="btn btn-outline-success btn-important"><i className="fa fa-star" aria-hidden="true"></i></botton>
            <botton className="btn btn-outline-danger"><i className="fa fa-trash" aria-hidden="true"></i></botton>
        </div>
    );
};

export default ToboListItem;