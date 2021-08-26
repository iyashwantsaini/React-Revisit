import React from "react";
import classes from "./InfoBox.module.css";

const InfoBox = () => {
  return (
    <React.Fragment>
      <div className={classes["info-text"]}>
        <div className={classes['info-data']}>
          Whether you’re looking for biryani to feed your desi cravings, soul
          comforting pizzas and burgers, or even a salad with a cup of chai or
          coffee, Zomato is the only app you need for the quickest doorstep
          delivery of your favourites. With over 1.5 million restaurants and 285
          million ratings and reviews, discover the best around you in no time –
          only on the Zomato app.
        </div>
      </div>
    </React.Fragment>
  );
};

export default InfoBox;
