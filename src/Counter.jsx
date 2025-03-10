import React, { useEffect, useState, useContext, useRef } from "react";
import { dataContext } from "./Home";

function Counter() {
  const [count, setCount] = useState(0);
  let refCount = useRef(0);
  const data = useContext(dataContext);
  function inc() {
    // setCount((count) => count + 1);
    // setCount((count) => count + 1);
    refCount.current++;
  }
  useEffect(() => {
    console.log(count);
  });
  return (
    <div>
      {data}
      <h2 className="m-2"> {refCount.current}</h2>
      <button className="btn btn-primary my-1" onClick={inc}>
        up
      </button>
      <button
        className="btn btn-info my-1"
        onClick={() => setCount(refCount.current)}
      >
        update
      </button>
    </div>
  );
}

export default Counter;
