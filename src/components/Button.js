import React from "react";

const Button = ({ onClick, children }) => (
  <button onClick={onClick} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
    {children}
  </button>
);

export default Button;