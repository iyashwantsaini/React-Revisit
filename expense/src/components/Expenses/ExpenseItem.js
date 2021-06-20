import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from "react";

function ExpenseItem(props) {
  //useState => a react hook - must be called directly inside the main component fn
  // const [title, setTitle] = useState(props.title); //returns 2 => a managed value,a change state fn

  // const clickhandler = () => {
  //   setTitle('Updated!'); // setting via the changing fn
  // };

  return (
    <Card className="expense-item">
      {/* below content is the children in Card */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickhandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
