import "./App.css";
import React, { useState } from "react";
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <h1>Hello World !</h1> : <div>hi</div>}
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
    </div>
  );
};

export default App;
