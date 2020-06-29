import React from "react";
import ReactDOM from "react-dom";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";
import ItemStatusFilter from "./components/item-status-filter";

const App = () => {
  const listItems = [
    { label: "Drink a tone of Coffee", important: false, id: 1 },
    { label: "Walk with your dog", important: true, id: 2 },
    { label: "Get a Real Job", important: true, id: 3 },
  ];
  return (
    <div>
      <TodoHeader />
      <div className="input-group mb-1">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList listItems={listItems} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
