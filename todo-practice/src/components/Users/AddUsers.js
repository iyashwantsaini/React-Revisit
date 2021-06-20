import React from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const ageHandler = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    props.addHandler(name, age);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="uname">Name: </label>
        <input onChange={nameHandler} type="text" id="uname"></input>
        <br />
        <label htmlFor="uage">Age: </label>
        <input onChange={ageHandler} type="text" id="uage"></input>
        <br />
        <Button name="Submit" type="submit" />
      </form>
    </Card>
  );
};

export default AddUser;
