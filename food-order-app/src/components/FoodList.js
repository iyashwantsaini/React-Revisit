import React, { useContext } from "react";
import classes from "./FoodList.modue.css";

const FoodList = (props) => {
  const plushandler = (key) => {
    props.incval(key);
  };
  const minushandler = (key) => {
    props.decval(key);
  };

  return (
    <React.Fragment>
      <div className="food-list-main">
        <div className="food-list-ul">
          {props.items.map((item) => {
            return (
              <div className="food-list-li" key={item.key}>
                <div className="item-name">Item : {item.name}</div>
                <div className="item-price">Price : {item.price}</div>
                <div className="item-desc">Desc : {item.description}</div>
                <div className="item-amount">
                  <div className="x">Quantity : {item.amount}</div>
                  <div
                    className="plus"
                    onClick={() => {
                      plushandler(item.key);
                    }}
                  >
                    {" "}
                    +{" "}
                  </div>
                  <div
                    className="minus"
                    onClick={() => {
                      minushandler(item.key);
                    }}
                  >
                    {" "}
                    -{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FoodList;
