import React from "react";
import ReactDOM from "react-dom";
import TodoHeader from "./components/todo-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";

const App = () => {
  const listItems = [
    { label: "Coffee", important: false },
    { label: "Walk a dog", important: true },
    { label: "Get a Job", important: true },
  ];
  return (
    <div>
      <TodoHeader />
      <TodoList listItems={listItems} />
      <SearchPanel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
