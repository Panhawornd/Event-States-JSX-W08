import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);
  /* You will need some function to handle the key pressed and button events */
  function handleAChange(event) {
    console.log("handleAChange called with value:", event.target.value);
    setValueA(event.target.value);
  }

  function handleBChange(event) {
    console.log("handleBChange called with value:", event.target.value);
    setValueB(event.target.value);
  }

  function handleCompute() {
    const numA = parseFloat(valueA);
    const numB = parseFloat(valueB);

    if (isNaN(numA) || isNaN(numB)) {
      setResult("Please enter valid numbers");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }
  function onA(event) {
    handleAChange(event);
  }

  function onB(event) {
    handleBChange(event);
  }
  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={valueA} onChange={handleAChange}/>

      <label>B =</label>
      <input type="text" value={valueB} onChange={handleBChange}/>

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input type="text"
        value={result}
        disabled
        style={{ color: isError ? "red" : "black" }} />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
