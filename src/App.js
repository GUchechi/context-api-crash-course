import React, { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import User from './Components/User';

function App() {
  const [userName, setUserName] = useState("")

  return (
    <div className="App">
      <Login setUserName={setUserName}/>
      <User userName={userName}/>
    </div>
  );
}

export default App;
