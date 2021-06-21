import React from "react";
import AddUser from "./components/Users/AddUsers";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const addHandler = (name, age) => {
    setData([...data, { id: Math.random(), name: name, age: age }]);
  };

  return (
    <React.Fragment>
      <div>
        <AddUser addHandler={addHandler} />
      </div>
      <div>
        {data.map((el) => (
          <div key={el.id}>
            {el.name} {el.age}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;
