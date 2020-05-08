import React from 'react';

import "./todoListItem.css";

class ToboListItem extends React.Component {
    
    state = {
        done: true
    }

    onLabelClick = () => {
        console.log(this.props.label)
    }

    render() {
        const { label, important } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-lable';
        if (done) {
            classNames += ' done';
        }

        const style = {
            color: important ? 'tomato' : 'black'
        }
    
        return (
            <div className="todo-list-iem">
                <span className = { classNames } style={style} onClick={ this.onLabelClick }> { label } </span>
                <button className="btn btn-outline-success btn-important"><i className="fa fa-star" aria-hidden="true"></i></button>
                <button className="btn btn-outline-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
        );
    };
};

export default ToboListItem;