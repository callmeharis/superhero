import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("Random Text");
  useEffect(() => {
    document.title = `New Value : ${value} + ${text}`;
    console.log("useEffect logic rendered here..");
  }, [value, text]); // dependency array
  console.log("component rendered here..");

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-semibold ">useEffect Component</h1>
      <h1 className="text-4xl my-2">{value}</h1>
      <h1 className="text-4xl my-2">{text}</h1>
      <div className="btns flex gap-2">
        <button
          onClick={() => setText("Hey Haris")}
          className="bg-indigo-600 rounded py-2 px-4 text-white"
        >
          Click
        </button>
        <button
          onClick={() => setValue(value + 1)}
          className="bg-indigo-600 rounded py-2 px-4 text-white"
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default UseEffectComponent;
