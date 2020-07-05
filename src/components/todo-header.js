import React from "react";

const TodoHeader = ({ complete, todo }) => {
  const headerStyle = {
    fontSize: "2.5em",
    textAlign: "center",
  };
  return (
    <div>
      <div className="alert-light mx-auto mb-3 shadow-sm" style={headerStyle}>
        Your todo list
      </div>
      <p className="text-center text-secondary">
        {todo} things todo, {complete} is done
      </p>
    </div>
  );
};

export default TodoHeader;
