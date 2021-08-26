import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/index";

const Counter = () => {
  //automatically sets up subscription for this component
  const counter = useSelector((state) => state.counter.counter);
  const showcounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incHandler = () => {
    dispatch(counterActions.inc({ value: 10 }));
  };

  const decHandler = () => {
    dispatch(counterActions.dec({ value: 10 }));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showcounter && <div className={classes.value}>{counter}</div>}
      {showcounter && (
        <div>
          <button onClick={incHandler}>Increment</button>
          <button onClick={decHandler}>Decrement</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
