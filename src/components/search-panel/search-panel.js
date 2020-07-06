import React from "react";
import "./search-panel.css";

const SearchPanel = () => {
  return (
    <input
      type="text"
      className="form-control search-panel"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="btnGroupAddon"
    />
  );
};

export default SearchPanel;
