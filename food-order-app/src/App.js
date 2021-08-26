import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import InfoBox from "./components/InfoBox";
import FoodList from "./components/FoodList";
import { v4 } from "uuid";

function App() {
  const [items, setItems] = useState([]);
  const [tot, setTot] = useState(0);
  useEffect(() => {
    const data = [
      {
        name: "Burger",
        description: "tasty burger",
        price: 100,
        amount: 0,
        key: v4(),
      },
      {
        name: "Pizza",
        description: "tasty pizza",
        price: 200,
        amount: 0,
        key: v4(),
      },
      {
        name: "Maggi",
        description: "tasty maggi",
        price: 300,
        amount: 0,
        key: v4(),
      },
      {
        name: "Sandwich",
        description: "tasty sandwich",
        price: 400,
        amount: 0,
        key: v4(),
      },
    ];
    setItems([...data]);
  }, []);

  useEffect(() => {
    var count = 0;
    for (var i = 0; i < items.length; i++) {
      count += items[i].amount;
      setTot(count);
    }
  }, [items]);

  const incval = (key) => {
    for (var i = 0; i < items.length; i++) {
      if (items[i].key === key) {
        items[i].amount = Math.max(0,items[i].amount+1);
        setItems([...items]);
      }
    }
  };

  const decval = (key) => {
    for (var i = 0; i < items.length; i++) {
      if (items[i].key === key) {
        items[i].amount = Math.max(0,items[i].amount-1);
        setItems([...items]);
      }
    }
  };

  return (
    <React.Fragment>
      <Navigation count={tot} />
      <InfoBox />
      <FoodList items={items} incval={incval} decval={decval} />
    </React.Fragment>
  );
}

export default App;
