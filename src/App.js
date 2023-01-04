import Button from "./Button";
import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      label: "React",
      content: "hi",
      id: 0,
    },
    {
      label: "CSS",
      content: "hi",
      id: 1,
    },
    {
      label: "HTML",
      content: "hi",
      id: 2,
    },
  ];
  return <Accordion items={items} />;
}

export default App;
