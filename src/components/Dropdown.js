import { useState, useRef, useEffect } from "react";
import Panel from "./Panel";

function Dropdown(props) {
  const { options, selectedOption, handleSelectClick } = props;
  const [openOptions, setOpenOptions] = useState(false);
  const divEl = useRef();

  const handleClick = () => {
    setOpenOptions((prev) => !prev);
  };

  const optionClick = (option) => {
    handleSelectClick(option.value);
    setOpenOptions((prev) => !prev);
  };

  useEffect(() => {
    if (!divEl.current) {
      return;
    }
    const handler = (event) => {
      if (!divEl?.current?.contains(event.target)) {
        setOpenOptions(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {selectedOption}
      </Panel>
      {openOptions && (
        <Panel>
          <DropdownOptions options={options} optionClick={optionClick} />
        </Panel>
      )}
    </div>
  );
}

const DropdownOptions = (props) => {
  const { options, optionClick } = props;

  return (
    <div className="absolute top-full">
      {options.map((option, index) => {
        return (
          <div
            className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
            key={index}
            onClick={() => {
              optionClick(option);
            }}
          >
            {option.label}
          </div>
        );
      })}
    </div>
  );
};
export default Dropdown;
