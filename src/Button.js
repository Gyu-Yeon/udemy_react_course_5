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

  return <button>{children}</button>;
}

export default Button;
