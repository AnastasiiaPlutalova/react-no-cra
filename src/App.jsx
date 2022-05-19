import React, { useState } from 'react';
import { FirstContext, SecondContext } from './context';
import ContextConsumer from './ContextConsumer';
import ToggleContextButton from './ToggleContextButton';

function App() {
  const setRandomValueToSecondContext = () => {
    setSecondContext({text: Math.random(), toggle: setRandomValueToSecondContext});
  }
  const [secondContext, setSecondContext] = useState({text: '123', toggle: setRandomValueToSecondContext});

  return (
    <FirstContext.Provider value='firts value'>
      <SecondContext.Provider value={secondContext}>
        <ContextConsumer />
        <ToggleContextButton />
      </SecondContext.Provider>
    </FirstContext.Provider>
  );
}

export default App;
