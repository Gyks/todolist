import React from "react";
import "./todo-list-item.css";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      important: this.props.important,
    };
  }

  onLabelClick = () => {
    this.setState(({ complete }) => {
      return {
        complete: !complete,
      };
    });
  };

  onBtnImportantClick = () => {
    this.setState(({ important }) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { complete, important } = this.state;
    let spanStyle = important ? " important" : "";
    spanStyle += complete ? " complete " : "";
    return (
      <span className={"list-group-item todo-list-item" + spanStyle}>
        <span onClick={this.onLabelClick} className="todo-list-item-label">
          {label}
        </span>
        <button onClick={onDeleted} className="btn btn-danger btn-list-item">
          <i className="fa fa-trash "></i>
        </button>
        <button
          onClick={this.onBtnImportantClick}
          className="btn btn-info btn-list-item"
        >
          <i className="fa fa-star"></i>
        </button>
      </span>
    );
  }
}
