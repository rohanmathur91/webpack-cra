import React, { useState } from "react";
import "./app.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="header">learning web tooling</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase count
      </button>
    </div>
  );
};
