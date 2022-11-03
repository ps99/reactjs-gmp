import React from "react";

const ErrorBoundary = (props: any) => {
  const OopsText = () => <h2>Oops, Error Happend!</h2>;

  let isEveryThingOk = true;

  return <>{isEveryThingOk ? props.children : <OopsText />}</>;
};

export default ErrorBoundary;
