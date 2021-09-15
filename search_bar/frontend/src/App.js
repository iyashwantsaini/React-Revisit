import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { v1 as uuid } from "uuid";

const server_url = "http://localhost:5000";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const searchInput = useRef();
  const placeInput = useRef();
  const heightInput = useRef();
  const dataInput = useRef();

  useEffect(() => {
    fetch(server_url + "/api/")
      .then((response) => {
        return response.json();
      })
      .then((jsonified) => {
        setPlaces([...jsonified]);
      });
  }, [refetch]);

  let timer = null;
  const searchHandler = () => {
    timer != null && clearTimeout(timer);
    timer = setTimeout(() => {
      fetch(server_url + `/api/${searchInput.current.value.trim()}`)
        .then((response) => {
          return response.json();
        })
        .then((jsonified) => {
          setPlaces([...jsonified]);
        });
    }, 1000);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const bodytosend = {
      place: placeInput.current.value,
      height: heightInput.current.value,
      data: dataInput.current.value,
    };
    console.log(bodytosend);
    await fetch(server_url + "/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodytosend),
    }).then((data) => {
      console.log(data);
      setRefetch(!refetch);
    });
  };

  return (
    <div className="main-div">
      <div className="form-main">
        <form onSubmit={formHandler}>
          <label>Place : </label>
          <input placeholder="place" ref={placeInput} />
          <br />
          <label>Height : </label>
          <input placeholder="height" ref={heightInput} />
          <br />
          <label>Data : </label>
          <input placeholder="data" ref={dataInput} />
          <br />
          <button>Submit</button>
        </form>
      </div>

      <div className="search-bar">
        <h1>Search Bar</h1>
        <input
          title="hello"
          className="search-input"
          ref={searchInput}
          onChange={searchHandler}
        />
      </div>

      <div className="grid-main">
        {places.map((place) => {
          return (
            <div key={uuid()} className="item">
              <h3>{place.place}</h3>
              <p>Height - {place.height}</p>
              <p>Place - {place.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
