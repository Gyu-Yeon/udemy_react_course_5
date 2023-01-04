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
      content: "2i",
      id: 1,
    },
    {
      label: "HTML",
      content: "5i",
      id: 2,
    },
  ];
  return <Accordion items={items} />;
}

export default App;
