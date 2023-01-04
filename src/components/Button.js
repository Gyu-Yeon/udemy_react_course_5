import className from "classnames";

function Button(props) {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
  } = props;

  return (
    <button {...rest} className="bg-red-500">
      {children}
    </button>
  );
}

export default Button;
