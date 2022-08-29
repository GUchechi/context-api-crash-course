import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [data, setData] = useState("")

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      setData(response.data[0].title)
      console.log('API WAS CALLED')
    })
  }, [])

  return (
    <div className="App">
      <h1>Hello world : {data}</h1>

    </div>
  );
}

export default App;
