import React, { ReactNode } from "react";

const ErrorBoundary = (props: any) => {
  const ErrorMessage = () => <h2>Oops, Error Happend!</h2>;

  let isEveryThingOk = true;

  return <>{isEveryThingOk ? props.children : <ErrorMessage />}</>;
};

export default ErrorBoundary;
