import React, { useState, Fragment } from "react";
import "./App.css";
import { EASY, HARD } from "./constants";
import Easy from "./components/Easy";
import Hard from "./components/Hard";

function App() {
  const [path, setPath] = useState("");

  // calls selected component
  const renderPath = path => {
    console.log(path);
    switch (path) {
      case EASY:
        return <Easy />;
      case HARD:
        return <Hard />;
      default:
        return <h1 id="title">Select difficulty to start game</h1>;
    }
  };

  return (
    <div className="App">
      <header className="container">
        <div className="card">
          <h1 id="title">Color Game</h1>
          <div>
            <button
              className="top btn btn-outline-success btn-lg"
              onClick={() => {
                setPath(EASY);
              }}
            >
              EASY
            </button>

            <button
              className="top btn btn-outline-danger btn-lg"
              onClick={() => {
                setPath(HARD);
              }}
            >
              HARD
            </button>
          </div>
        </div>
      </header>
      {renderPath(path)}
    </div>
  );
}

export default App;
