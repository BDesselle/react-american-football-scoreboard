import React/* , { useState } */ from 'react';
import BottomRow from "../BottomRow/BottomRow";

function Scoreboard() {
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">Lions</h2>
          <div className="home__score">0</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
          <h2 className="away__name">Tigers</h2>
          <div className="away__score">0</div>
        </div>
      </div>
      <BottomRow />
    </section>
  );
};

export default Scoreboard;