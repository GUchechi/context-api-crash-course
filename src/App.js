import React, { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  const onClick = () => {
    // console.log(inputRef.current.value);

    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>

    </div>
  );
}

export default App;
