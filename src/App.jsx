import React from 'react';
import Modal from "./Modal";

function App() {
  const agreement = (isConfirmed) => {
    return <>agreed: {isConfirmed !== undefined && isConfirmed.toString()}</>;
  };

  return <Modal showModal={true} render={agreement}/>;
}

export default App;
