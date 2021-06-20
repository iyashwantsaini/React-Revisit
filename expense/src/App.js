import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 290.4,
      date: new Date(2021, 5, 18),
    },
    {
      id: "e2",
      title: "House insurance",
      amount: 290.5,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e3",
      title: "Plane insurance",
      amount: 290.6,
      date: new Date(2021, 9, 21),
    },
  ];

  const [currExpenses, setExpenses] = useState(expenses);

  const AdditionHandler = (data) => {
    // currExpenses.push({
    //   id: data.id,
    //   title: data.title,
    //   amount: data.amount,
    //   date: new Date(data.date),
    // });
    // console.log(expenses);
    // setExpenses([data,...currExpenses]);
    // OR
    setExpenses((prevState)=>{
      return [data,...prevState];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={AdditionHandler} />
      <Expenses items={currExpenses} />
    </div>
  );
}

export default App;
