import React, { useState } from 'react';
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard"
import Buttons from "./components/Buttons/Buttons"

function App() {
  return (
    <div className="container">
      <Scoreboard />
      <Buttons />
    </div>
  );
}

export default App;
