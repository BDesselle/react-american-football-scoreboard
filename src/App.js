import React, { useState } from 'react';
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeScore, setHome] = useState(0);
  const [awayScore, setAway] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setHome(homeScore + 6)}>
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHome(homeScore + 3)}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAway(awayScore + 6)}>
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAway(awayScore + 3)}>
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
