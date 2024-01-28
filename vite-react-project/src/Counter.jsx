import { useState } from "react";

export function Counter(){
    const [counter,setCounter] = useState(15);
    const addValue = ()=>{
      setCounter(counter+1);
    }
    const removeValue = ()=>{
      setCounter(counter-1);
    }

    return(
        <div>
          <h2>chai aur code</h2>
          <h3>counter value  : {counter}</h3>
          <button onClick={addValue}>Add value</button><br /><br />
          <button onClick={removeValue}>Remove value</button>
      </div>
    )
}