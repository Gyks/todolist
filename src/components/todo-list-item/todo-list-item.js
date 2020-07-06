import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      complete,
      important,
      hidden,
    } = this.props;
    let spanStyle = important ? " important" : "";
    spanStyle += complete ? " complete " : "";
    spanStyle += hidden ? " d-none " : "";
    return (
      <span className={"list-group-item todo-list-item" + spanStyle}>
        <span onClick={onToggleDone} className="todo-list-item-label">
          {label}
        </span>
        <button onClick={onDeleted} className="btn btn-danger btn-list-item">
          <i className="fa fa-trash "></i>
        </button>
        <button
          onClick={onToggleImportant}
          className="btn btn-info btn-list-item"
        >
          <i className="fa fa-star"></i>
        </button>
      </span>
    );
  }
}
