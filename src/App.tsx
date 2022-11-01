import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import StyledApp from "./StyledApp";

const App = () => {
  return (
    <>
      <StyledApp />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
