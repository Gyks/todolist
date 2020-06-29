import React from "react";

const TodoHeader = () => {
  const headerStyle = {
    fontSize: "2.5em",
    textAlign: "center",
  };
  return (
    <div className="alert-light mx-auto mb-3 shadow-sm" style={headerStyle}>
      Your todo list
    </div>
  );
};

export default TodoHeader;
