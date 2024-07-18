import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  function inc(){
    setCount(count+1)
  }

  function dec(){
    setCount(count-1)
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>Count: {count}</div>
      <br/>
      <button onClick={inc}>Increment</button><span> </span><button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;