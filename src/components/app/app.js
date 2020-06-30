import React from "react";
import TodoHeader from "../todo-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";

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

export default App;
