import React, {useState} from 'react'
import "./counter.css"

function Counter() {
    const [value, setValue] = useState(0)
    function increment() {
        setValue(value+1)
    }
    function decrement() {
        if (value<1) {
            alert("You have reached the minimum value...")
            setValue(0)
        }
        else{
            setValue(value-1)
        }
    }
    function reset() {
        setValue(0)
    }
  return (
    <div className='counter'>
      <h1>Counter</h1>
      <h1>{value}</h1>
      <div className="btns">
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default Counter
