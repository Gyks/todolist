import React from "react";
import "./todo-list-item.css";

const TodoListItem = ({ label, important = false }) => {
  const spanStyle = important ? " text-danger" : " text-info";
  return (
    <span className={"list-group-item todo-list-item" + spanStyle}>
      <span className="todo-list-item-label">{label}</span>
      <button className="btn btn-danger btn-list-item">
        <i className="fa fa-trash "></i>
      </button>
      <button className="btn btn-info btn-list-item">
        <i className="fa fa-check"></i>
      </button>
    </span>
  );
};

export default TodoListItem;
