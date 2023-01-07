import { useState } from "react";

function Accordion(props) {
  const { items } = props;
  const [contentId, setContentId] = useState("");
  const handleClick = (id) => {
    //functional state Change
    // 이전 state 값에 따라 바뀔 state가 영향을 받을 때 사용할 것.
    setContentId((prev) => {
      if (prev === id) {
        return "";
      } else return id;
    });
  };
  return (
    <div className="border-x border-t rounded">
      {items.map((item) => {
        return (
          <div className="each-container" key={item.id}>
            <div
              className="flex p-3 bg-gray-50 border-b items-center cursor-pointer"
              onClick={() => handleClick(item.id)}
            >
              {item.label}
            </div>
            {contentId === item.id ? (
              <div className="border-b p-5">{item.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;

// 클릭할시, css를 바꿀
