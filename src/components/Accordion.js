function Accordion(props) {
  const { items } = props;

  const reminderItems = items.map((item) => {
    return (
      <div>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });
  retrun(<div>{reminderItems}</div>);
}

export default Accordion;
