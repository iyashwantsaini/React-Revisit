import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "./Input";

const emailreducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passreducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const email = useRef();
  const pass = useRef();
  const ctx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailstate, emaildispatch] = useReducer(emailreducer, {
    value: "",
    isValid: null,
  });

  const [passstate, passdispatch] = useReducer(passreducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");
    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emaildispatch({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailstate.isValid && passstate.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    passdispatch({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailstate.isValid && passstate.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailstate.isValid);
    emaildispatch({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    passdispatch({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailstate.value, passstate.value);
    } else if (!emailstate.isValid) {
      email.current.focus();
    } else {
      pass.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={email}
          isValid={emailstate.isValid}
          id={"email"}
          label={"E-Mail"}
          type={"email"}
          value={emailstate.value}
          onChangeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
        />
        <Input
          ref={pass}
          isValid={passstate.isValid}
          id={"password"}
          label={"Password"}
          type={"password"}
          value={passstate.value}
          onChangeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
