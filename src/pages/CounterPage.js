import { useState, useEffect } from "react";
import Button from "../components/Button";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default CounterPage;
