import React from "react";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import MainPage from "./components/Pages/MainPage";
import Footer from "./components/Footer";
import StyledApp from "./StyledApp";

const App = () => {
  return (
    <>
      <StyledApp />
      <Header />
      <ErrorBoundary>
        <MainPage />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
