import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <h1>Page Not Found...</h1>;
};
