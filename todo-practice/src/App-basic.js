import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(-1);
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
    if (name.length === 0 || age < 0) {
      alert("invalid!");
    } else {
      setData([...data, { key: Math.random(), name: name, age: age }]);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>Name</div>
        <input onChange={nameHandler} type="text" id="1"></input>
        <br />
        <div>Age</div>
        <input onChange={ageHandler} type="text" id="2"></input>
        <br />
        <button type="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
      <div>
        {data.map((el) => (
          <div key={el.key}>
            {el.name} {el.age}
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
