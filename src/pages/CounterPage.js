import Button from "../components/Button";
import { useState } from "react";
function CounterPage({ initialCount }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(Number(count) + Number(inputValue));
    console.log(inputValue, count);
    setInputValue(0);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <div>
        <Button onClick={increment}>Increment</Button>
      </div>
      <div>
        <Button onClick={decrement}>Decrementt</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded p-3 shadow bg-white w-full"
          type="number"
          value={inputValue}
          onChange={handleOnchange}
        />
        <Button type="submit" primary>
          Add it
        </Button>
      </form>
    </div>
  );
}

export default CounterPage;
