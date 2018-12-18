import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const brandon = {
  name: "Brandon",
  age: 23,
  location: "Florida",
  favBook: "10 rules for life",
  favBand: ["Pearl Jam", "Metallica", "MGK"]
};

const MeComponent = props => {
  return (
    <React.Fragment>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
      <p>Favorite Book: {props.favBook}</p>
      <hr />
      <h3>Favorite Bands</h3>
      {props.favBand.map(element => {
        return <p>{element}</p>;
      })}
      <hr />
    </React.Fragment>
  );
};

function App() {
  return (
    <div className="App">
      <MeComponent
        name={brandon.name}
        age={brandon.age}
        location={brandon.location}
        favBook={brandon.favBook}
        favBand={brandon.favBand}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
