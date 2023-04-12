import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const onClickHandler = () => {
    setNumber(number + 1);
    console.log(number);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onClickHandler}>Add</button>
    </>
  );
};

export default Counter;
