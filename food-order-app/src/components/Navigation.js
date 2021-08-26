import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <div className={classes["navigation-main"]}>
      <div className={classes["navigation-items"]}>
        <div className={classes["navigation-title"]}>Food Order App</div>
        <div className={classes["navigation-cart"]}>
          <div className={classes["cart-text"]}>Cart</div>
          <div className={classes["cart-count"]}>{props.count}</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
