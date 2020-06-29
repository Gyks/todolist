import React from "react";
import TodoListItem from "./todo-list-item";
import "./todo-list.css";

const TodoList = ({ listItems }) => {
  const elements = listItems.map((item) => {
    return <TodoListItem {...item} key={item.id} />;
  });
  return <div className="list-group todo-list">{elements}</div>;
};

export default TodoList;
