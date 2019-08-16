import React from 'react';
import { EASY, HARD } from "../constants";

const Header = (props) => {
    return ( 
        <header className="container">
        <div className="card">
          <h1 id="title">Color Game</h1>
          <div>
            <button
              className="top btn btn-outline-success btn-lg"
              onClick={() => {
                props.changePath(EASY);
              }}
            >
              EASY
            </button>

            <button
              className="top btn btn-outline-danger btn-lg"
              onClick={() => {
                props.changePath(HARD);
              }}
            >
              HARD
            </button>
          </div>
        </div>
      </header>
     );
}
 
export default Header;