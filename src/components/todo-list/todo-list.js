import React from "react";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = ({ listItemsTodo, onDeleted }) => {
  const elements = listItemsTodo.map((itemTodo) => {
    return (
      <TodoListItem
        onDeleted={() => onDeleted(itemTodo.id)}
        {...itemTodo}
        key={itemTodo.id}
      />
    );
  });
  return <div className="list-group todo-list">{elements}</div>;
};

export default TodoList;
