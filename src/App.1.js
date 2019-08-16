import React, { useState, Fragment } from "react";
import "./App.css";

function App() {
  const [colorArray, setColorArray] = useState([]);
  const [pickedColor, setPickedColor] = useState("");
  const [clickedColor, setClickedColor] = useState("");
  const [playing, setPlaying] = useState(true);

  // resets the game
  const reset = () => {
    setColorArray([]);
    setPickedColor("");
    setClickedColor("");
    setPlaying(true);
    document.body.style.backgroundColor = "#292727";
  };

  //create random rgba values
  const randomColor = () => {
    let r = Math.ceil(Math.random() * 256);
    let g = Math.ceil(Math.random() * 256);
    let b = Math.ceil(Math.random() * 256);
    let a = parseFloat(Math.random().toFixed(2));

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };

  const generateRandomColors = num => {
    //make an array
    let array = [];

    //create random number between 0-5 to use as random color picker index
    let i = Math.abs(Math.ceil(Math.random() * 6 - 1));

    //add random colors to array
    for (let i = 0; i < num; i++) {
      array.push(randomColor());
      //get random color and push into array
    }
    //store array to arr state
    setColorArray(array);
    //store randomly picked color to state
    setPickedColor(array[i]);
  };

  // takes in onClick event of specific square clicked
  const clickHandler = e => {
    setClickedColor(e.target.style.backgroundColor);
    if (pickedColor === "") {
      return;
    }
    // if clicked square rgba value equals picked color rgba value, you win
    // and turns all other square and background to the same color
    // and call playingStatus(false) state
    else if (e.target.style.backgroundColor === pickedColor) {
      win(e.target.style.backgroundColor);
      return playingStatus(false);
    } else {
      console.log("try again");
      e.target.style.backgroundColor = "#292727";
    }
    // if color doesn't match, change color of the square clicked to background color to simulate disappearance
  };

  const win = value => {
    let array = [];
    for (let i = 0; i < colorArray.length; i++) {
      array.push(value);
    }
    setColorArray(array);
    document.body.style.backgroundColor = value;
    // change square and background colors same as picked color
  };

  const playingStatus = input => {
    setPlaying(input);
  };

  return (
    <div className="App">
      <header className="container">
        <div className="card">
          <h1 id="title">Color Game</h1>
        </div>

        {playing ? (
          <Fragment>
            <div>
              <button
                className="top btn btn-outline-primary btn-lg"
                onClick={() => {
                  generateRandomColors(6);
                }} // click to call generate random colors
              >
                Start
              </button>
              <button
                className="top btn btn-outline-warning btn-lg"
                onClick={() => reset()}
              >
                Reset
              </button>
            </div>
            <div>
              {/* // assign 6 randomly generated rgba values (stored in arr state) to each square
              // store color value when one of the squares is clicked */}
              <div
                className="square"
                style={{ backgroundColor: colorArray[0] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[1] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[2] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[3] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[4] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[5] }}
                onClick={clickHandler}
              />
            </div>
            {/* <div className='card'>
              <div>Color Array: {colorArray}</div>
              <div>Picked color: {pickedColor}</div>
              <div>Clicked color: {clickedColor}</div>
            </div> */}
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <div
                className="square"
                style={{ backgroundColor: colorArray[0] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[1] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[2] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[3] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[4] }}
                onClick={clickHandler}
              />
              <div
                className="square"
                style={{ backgroundColor: colorArray[5] }}
                onClick={clickHandler}
              />
            </div>

            <div className="card">
              <div>
                <h1>You Got It!</h1>
              </div>
              <div>
                <h2>Color: {pickedColor}</h2>
              </div>
              <button
                className="btn btn-outline-warning btn-lg"
                onClick={() => reset()}
              >
                Play Again?
              </button>
            </div>
          </Fragment>
        )}
      </header>
    </div>
  );
}

export default App;
