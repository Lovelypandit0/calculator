import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'
import {evaluate} from 'mathjs'
function App() {
  const [start, SetInput] = useState("");
  const handleonclick = (event)=>{
let newval = event.target.innerText;
  if(newval === "AC"){
    SetInput("");
  } else if(newval=== "Bck"){
    SetInput((prev) => prev.slice(0, -1));

  } else if (newval === "=") {
    try {
      let expression = start
      .replace(/(\d+(\.\d+)?)%/g, "($1/100)") 
      .replace(/X/g, "*"); 

      SetInput(evaluate(expression).toString());
    } catch (error) {
      SetInput("Error");
      SetInput("");
    }
  } else if(newval=== "X"){
  SetInput((prev) => prev + "*")
}
  else{
    SetInput(start + newval);
  }
  }
  const buttons = ["AC", "Bck", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", ".", "0", ".", "="]
  return <>
<center>
<Display start={start}></Display>
 <Buttons  buttons={buttons} handleonclick={handleonclick}></Buttons>
 </center>
</>
}

export default App;
