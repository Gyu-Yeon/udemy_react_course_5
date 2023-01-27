import Button from "../components/Button";
import produce from "immer";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const INPUTVALUE_CHANGE = "inputValue_change";
const HANDLE_SUBMIT = "handle_submit";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INPUTVALUE_CHANGE:
      console.log(action.payload);
      return {
        ...state,
        inputValue: action.payload,
      };
    case HANDLE_SUBMIT:
      // console.log(action.payload);
      return {
        ...state,
        count: state.count + state.inputValue,
        inputValue: 0,
      };
    default:
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    inputValue: 0, 
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleOnchange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setInputValue(e.target.value);
    dispatch({
      type: INPUTVALUE_CHANGE,
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: HANDLE_SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.inputValue || ""}
          onChange={handleOnchange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
