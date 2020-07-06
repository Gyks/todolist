import React from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <button
          className={
            "btn " +
            (name === this.props.filter ? "btn-info" : "btn-outline-info")
          }
          name={name}
          key={name}
          onClick={() => this.props.onChangeFilter(name)}
        >
          {label}
        </button>
      );
    });
    return (
      <div className="btn-group item-filter-group" role="group">
        {buttons}
      </div>
    );
  }
}
