// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterslice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: false },
  reducers: {
    inc(state, action) {
      state.counter += action.payload.value;
    },
    dec(state, action) {
      state.counter -= action.payload.value;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authslice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },
    logout(state, action) {
      state.isLoggedIn = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterslice.reducer,
    auth: authslice.reducer,
  },
});

export const counterActions = counterslice.actions;
export const authActions = authslice.actions;
export default store;

// const store = createStore(counterReducer);
// const store = createStore(counterslice.reducer);
// const counterReducer = (state = { counter: 0, showCounter: false }, action) => {
//   if (action.type === "INC") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "DEC") {
//     return {
//       counter: state.counter - action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "TOGGLE") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
