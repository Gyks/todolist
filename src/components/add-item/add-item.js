import React from "react";

import "./add-item.css";

export default class AddItem extends React.Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState(({ label }) => {
      return { label: "" };
    });
  };

  render() {
    return (
      <form className="input-group add-item" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          value={this.state.label}
          placeholder="Type here what needs to be done..."
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-success btn-todo-list">
            <i className="fa fa-plus" />
          </button>
        </div>
      </form>
    );
  }
}
