import { useState } from "react";

function Accordion(props) {
  const { items } = props;
  const [contentId, setContentId] = useState(100);
  const handleClick = (id) => {
    if (id === 0) {
      setContentId(0);
    } else if (id === 1) {
      setContentId(1);
    } else if (id === 2) {
      setContentId(2);
    }
  };
  return (
    <div className="main-container">
      {items.map((item) => {
        return (
          <div className="each-container" key={item.id}>
            <div className="label-container">
              {item.label}{" "}
              <button onClick={() => handleClick(item.id)}>click</button>
            </div>
            {contentId === item.id ? (
              <div className="open-container">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

// 클릭할시, css를 바꿀
