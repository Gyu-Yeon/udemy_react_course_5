import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const options = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
  ];
  const [selectedOption, setSelectedOption] = useState("Select...");

  const handleSelectClick = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex">
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        handleSelectClick={handleSelectClick}
      />
      <Dropdown
        options={options}
        selectedOption={selectedOption}
        handleSelectClick={handleSelectClick}
      />
    </div>
  );
}

export default App;
