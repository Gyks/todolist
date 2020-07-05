import React from "react";
import TodoHeader from "../todo-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

export default class App extends React.Component {
  state = {
    todoData: [
      { label: "Drink a tone of Coffee", important: false, id: 1 },
      { label: "Walk with your dog", important: false, id: 2 },
      { label: "Get a Real Job", important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idxToDelete = todoData.findIndex((el) => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, idxToDelete),
        ...todoData.slice(idxToDelete + 1),
      ];
      return {
        todoData: newTodoData,
      };
    });
  };

  addItem = (text) => {
    this.setState(({ todoData }) => {
      let newId = todoData.slice(-1)[0].id;
      newId++;
      const newItem = { label: text, important: false, id: newId };
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData,
      };
    });
  };

  render() {
    return (
      <div>
        <TodoHeader />
        <div className="input-group mb-1">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          onDeleted={this.deleteItem}
          addItem={this.addItem}
          listItemsTodo={this.state.todoData}
        />
      </div>
    );
  }
}
