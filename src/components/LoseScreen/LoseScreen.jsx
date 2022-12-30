import React from "react";
import "./losescreen.css";
const LoseScreen = ({ reset }) => {
  return (
    <div className="lostContainer">
      <div className="loseModal">
        <h1>YOU LOST!</h1>
        <button className="btn btn-success" onClick={() => reset()}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default LoseScreen;
