import useNavigation from "../hooks/use-navigation";

function Route(props) {
  const { children, path } = props;
  const { currentPath } = useNavigation();

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
