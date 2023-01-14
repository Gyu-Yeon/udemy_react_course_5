import Button from "../components/Button";
function ButtonPage() {
  const handleClick = () => {
    console.log(1);
  };
  return (
    <div>
      <div>
        <Button onClick={handleClick}>Click me!</Button>
      </div>
      <div>
        <Button>Buy Now!</Button>
      </div>
      <div>
        <Button>Se</Button>
      </div>
      <div>
        <Button></Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default ButtonPage;
