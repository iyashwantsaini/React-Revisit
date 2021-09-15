import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { v1 as uuid } from "uuid";

const server_url = "http://localhost:5000";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [showplaces, setShowplaces] = useState([]);
  const searchInput = useRef();

  useEffect(() => {
    fetch(server_url + "/api")
      .then((response) => {
        return response.json();
      })
      .then((jsonified) => {
        setPlaces([...jsonified]);
        setShowplaces([...jsonified]);
      });
  }, []);

  const filtering_fn = (item) => {
    const x = searchInput.current.value.trim();
    return item.place.includes(x) || item.data.includes(x);
  };

  const searchHandler = () => {
    const x = places.filter(filtering_fn);
    setShowplaces(x);
  };

  return (
    <div className="main-div">
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
        {showplaces.map((place) => {
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
