import React, { useState } from "react";

// you have to use "use" keyword in every hook
// preserve a value in kinda variable
// can re-render a component

export function UseStateComponent() {
  //   console.log(useState(78));
  const [text, setText] = useState("Random")
  function changeName() {
    setText("Haris")
  }
  return (
    <div>
      <h1>useState Component</h1>
      <h1>{text}</h1>
      <button onClick={changeName}>Click</button>
    </div>
  );
}

// export default UseStateComponent
