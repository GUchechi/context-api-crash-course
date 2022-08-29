import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {

  const [data, setData] = useState("")
  const [count, setCount] = useState(0)

  const handler = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((response) => {
      setData(response.data[0].title)
      console.log('API WAS CALLED')
    });
  }, [count])

  return (
    <div className="App">
      <h1>Hello world : {data}</h1>
      <h1>{count}</h1>

      <button onClick={handler}>Click</button>

    </div>
  );
}

export default App;
