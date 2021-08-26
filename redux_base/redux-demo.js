const redux = require("redux");

//reducer fn to handle/modify state
//receives curr state and action
//outputs new state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "INC") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type == "DEC") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//store to store data
const store = redux.createStore(counterReducer);

//subscriber function
const countSubscriber = () => {
  const latest_state = store.getState();
  console.log(latest_state);
};

//subscribe to get stored data
store.subscribe(countSubscriber);

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
