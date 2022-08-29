import React, { useRef } from 'react';
import './App.css';
import Button from './Components/Button';

function App() {
  
  const buttonRef = useRef(null);

  return (
    <div className="App">
      <button
         onClick = {() => {
          buttonRef.current.alterToggle();
         }}
        >Button from Parent</button> 
      <Button  ref={buttonRef}/>
    </div>
  );
}

export default App;
