import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      authActions.login({
        email: email.current.value,
        password: password.current.value,
      })
    );
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={email} type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={password} type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
