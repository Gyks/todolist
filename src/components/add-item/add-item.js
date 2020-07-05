import React from "react";

import "./add-item.css";

const AddItem = ({ addItem }) => {
  const addNewItem = () => {
    addItem("Cheems best doge");
  };
  return (
    <div className="input-group add-item">
      <input type="text" className="form-control"></input>
      <div className="input-group-append">
        <button onClick={addNewItem} className="btn btn-success btn-todo-list">
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  );
};

export default AddItem;
