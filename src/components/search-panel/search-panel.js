import React from "react";
import "./search-panel.css";

export default class SearchPanel extends React.Component {
  onChangeSearchText = (e) => {
    this.props.onChangeSearchText(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-panel"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="btnGroupAddon"
        onChange={this.onChangeSearchText}
      />
    );
  }
}
