import React from "react";
import "./item-status-filter.css";

const ItemStatusFilter = () => {
  return (
    <div className="btn-group item-filter-group" role="group">
      <button type="button" className="btn btn-info">
        All
      </button>
      <button type="button" className="btn btn-outline-info">
        Active
      </button>
      <button type="button" className="btn btn-outline-success">
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
