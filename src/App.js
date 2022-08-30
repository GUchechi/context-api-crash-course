import React, { createContext, useState} from 'react';
import './App.css';
import Login from './Components/Login';
import User from './Components/User';

export const AppContext = createContext(null)

function App() {
  const[userName, setUserName] = useState("")

  return (
    <AppContext.Provider value={{userName, setUserName}}>
      <div className="App">
        <Login />
        <User />
      </div>
    </AppContext.Provider>
  );
}

export default App;
