import React, {useState} from "react";

function App() {
  /* You will need to use many state to keep the input values and other needs */
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);

  /* You will need some function to handle the key pressed and button events */
  function onA(event){
    setA(a => Number(event.target.value));
    console.log(a)
  }
  function onB(event){
    setB(b => Number(event.target.value));
  }
  function compute(){
    setSum(s => a + b);
    console.log(sum)
  }

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input disabled value={isNaN(sum)? "A and B shall be numbers!" : sum} className={isNaN(sum) ? "error" : ""}/>
      <button onClick={compute}>Compute</button>
    </main>
  );
}

export default App;