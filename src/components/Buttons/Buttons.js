import React/* , { useState } */ from 'react';

function Buttons() {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button
          className="homeButtons__touchdown">
          Home Touchdown
          </button>
        <button
          className="homeButtons__fieldGoal">
          Home Field Goal
          </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown">
          Away Touchdown
          </button>
        <button
          className="awayButtons__fieldGoal">
          Away Field Goal
          </button>
      </div>
    </section>
  );
};

export default Buttons;