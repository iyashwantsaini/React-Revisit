import React from "react";

const Button = (props) => {
  return <button onClick={props.onClick} type={props.type}>{props.name}</button>;
};

export default Button;
