import './App.css';
import Paddle from './Components/paddle';
import React, {useState} from 'react';
import AdditionalOptions from './Components/additional-options';

function App() {
  const [firstPassed, setFirstPassed] = useState(false);
  const [secondPassed, setSecondPassed] = useState(false);

  return (
    <div className="App">
      <h1>Krok pierwszy:</h1>
      <button className="button" onClick={() => setFirstPassed(true)}>Zamieszaj kulki</button>

      <h1>Krok drugi:</h1>
      <AdditionalOptions isEnabled={firstPassed} setSecondPassed={setSecondPassed}/>

      <h1>Krok trzeci:</h1>
      <Paddle isEnabled={secondPassed}/>
    </div>
  );
}

export default App;