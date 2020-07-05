import React from "react";
import TodoListItem from "../todo-list-item";
import AddItem from "../add-item";
import "./todo-list.css";

const TodoList = ({ listItemsTodo, onDeleted, addItem }) => {
  const elements = listItemsTodo.map((itemTodo) => {
    return (
      <TodoListItem
        onDeleted={() => onDeleted(itemTodo.id)}
        {...itemTodo}
        key={itemTodo.id}
      />
    );
  });
  return (
    <div>
      <AddItem addItem={addItem} />
      <div className="list-group todo-list">{elements}</div>
    </div>
  );
};

export default TodoList;
