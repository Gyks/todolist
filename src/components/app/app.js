import React from "react";
import TodoHeader from "../todo-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";

export default class App extends React.Component {
  state = {
    todoData: [
      {
        label: "Drink a tone of Coffee",
        important: false,
        complete: false,
        hidden: false,
        id: 1,
      },
      {
        label: "Walk with your dog",
        important: false,
        complete: false,
        hidden: false,
        id: 2,
      },
      {
        label: "Get a Real Job",
        important: false,
        complete: false,
        hidden: false,
        id: 3,
      },
    ],
    filter: "all",
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
      const newItem = {
        label: text,
        important: false,
        complete: false,
        hidden: false,
        id: newId,
      };
      const newTodoData = [...todoData, newItem];

      return {
        todoData: newTodoData,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idxToUpdate = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idxToUpdate];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newTodoData = [
        ...todoData.slice(0, idxToUpdate),
        newItem,
        ...todoData.slice(idxToUpdate + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idxToUpdate = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idxToUpdate];
      const newItem = { ...oldItem, complete: !oldItem.complete };
      const newTodoData = [
        ...todoData.slice(0, idxToUpdate),
        newItem,
        ...todoData.slice(idxToUpdate + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  };

  onChangeFilter = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  onChangeSearchText = (text) => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData];
      newTodoData.map((el) => {
        if (!el.label.includes(text)) {
          el.hidden = true;
        } else {
          el.hidden = false;
        }
        return el;
      });

      return {
        todoData: newTodoData,
      };
    });
  };

  render() {
    const completeCount = this.state.todoData.filter((el) => el.complete)
      .length;
    const todoCount = this.state.todoData.length - completeCount;
    let todoItemsFiltered = [];
    switch (this.state.filter) {
      case "all":
        todoItemsFiltered = this.state.todoData;
        break;
      case "done":
        todoItemsFiltered = this.state.todoData.filter((el) => el.complete);
        break;
      case "active":
        todoItemsFiltered = this.state.todoData.filter((el) => !el.complete);
        break;
      default:
        break;
    }
    return (
      <div>
        <TodoHeader todo={todoCount} complete={completeCount} />
        <div className="input-group mb-1">
          <SearchPanel onChangeSearchText={this.onChangeSearchText} />
          <ItemStatusFilter
            filter={this.state.filter}
            onChangeFilter={this.onChangeFilter}
          />
        </div>
        <TodoList
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          addItem={this.addItem}
          listItemsTodo={todoItemsFiltered}
        />
      </div>
    );
  }
}
