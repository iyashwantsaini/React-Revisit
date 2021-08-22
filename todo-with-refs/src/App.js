import './App.css';
import React,{
  useRef,
  useState
} from 'react';

function App() {
  var [data,setData]=useState([]);
  const name=useRef();
  const addition = (e) =>{
    e.preventDefault();
    setData([...data,name.current.value]);
    name.current.value='';
  }
  return ( 
    <React.Fragment>
      <div>
        <label>Name</label>
        <input type="text" ref={name} />
        <br />
        <button onClick={addition}>Add</button>
      </div>
      <div>
        <ul>
        {
          data.map((x) => {
            return <div key={x}>{x}</div>;
          })
        }
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;