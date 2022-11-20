import React, { ReactNode } from "react";

const ErrorBoundary = (props: any) => {
  const ErrorMessage = () => <h2>Oops, Error Happend!</h2>;

  let isError = false;

  return <>{isError ? <ErrorMessage /> : props.children}</>;
};

export default ErrorBoundary;
