import './App.css';
import Paddle from './Components/paddle';
import React, { useState } from 'react';
import AdditionalOptions from './Components/additional-options';

function App() {
  const [redBeads, setRedBeads] = useState(getRandom());

  return (
    <div className="App">
      <AdditionalOptions/>
      <button className="button" onClick={ () => setRedBeads(getRandom()) }>Losuj</button>
      <Paddle redBeads={redBeads} setRedBeads={setRedBeads}/>
    </div>
  );
}

function getRandom() {
  return Math.floor(Math.random() * (15 - 4 + 1)) + 4;
}

export default App;