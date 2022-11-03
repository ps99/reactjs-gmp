import React from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import Main from "./components/Main";
import Footer from "./components/Footer";
import StyledApp from "./StyledApp";

const App = () => {
  return (
    <>
      <StyledApp />
      <Header />
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
