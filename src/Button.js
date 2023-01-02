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
  } = props;

  return <button className="bg-red-500">{children}</button>;
}

export default Button;
