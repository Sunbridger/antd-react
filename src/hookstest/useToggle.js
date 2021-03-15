import React from "react";
import { useToggle } from "ahooks";

const Toggle = () => {
  const [ state, { toggle, setLeft, setRight } ] = useToggle();
  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
        <button onClick={() => setLeft()}>setLeft</button>
        <button onClick={() => setRight()}>setRight</button>
        
      </p>
    </div>
  );
};

export default Toggle;
