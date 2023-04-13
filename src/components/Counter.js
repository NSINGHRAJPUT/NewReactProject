import { useRef, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  let num = useRef(0);

  const onClickHandler = () => {
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={onClickHandler}>Add</button>
    </>
  );
};

export default Counter;
