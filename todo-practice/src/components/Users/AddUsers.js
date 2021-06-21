import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef } from "react";
// import { useState } from "react";

const AddUser = (props) => {
  const refName = useRef();
  const refAge = useRef();

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // const nameHandler = (e) => {
  //   e.preventDefault();
  //   setName(e.target.value);
  // };
  // const ageHandler = (e) => {
  //   e.preventDefault();
  //   setAge(e.target.value);
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const name = refName.current.value;
    const age = refAge.current.value;
    props.addHandler(name, age);
    refName.current.value = "";
    refAge.current.value = "";
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="uname">Name: </label>
        {/* <input onChange={nameHandler} type="text" id="uname"></input> */}
        <input ref={refName} type="text" id="uname"></input>
        <br />
        <label htmlFor="uage">Age: </label>
        {/* <input onChange={ageHandler} type="text" id="uage"></input> */}
        <input ref={refAge} type="text" id="uage"></input>
        <br />
        <Button name="Submit" type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
