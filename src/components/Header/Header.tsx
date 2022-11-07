import React from "react";
import StyledHeader, { StyledLogo } from "./StyledHeader";
import Logo from "../../assets/images/header-logo.svg";
import Button from "../Button";
import HeaderSearch from "./Search";

const Header = () => {
  const ADD_BUTTON_TITLE = "+ add movie";
  const addHandler = (e: any) => {
    console.log(e.currentTarget);
  };
  return (
    <StyledHeader>
      <StyledLogo href="/">
        <img src={Logo} alt="NetflixRoulette" />
      </StyledLogo>
      <Button
        handler={addHandler}
        classesList={["h-btn"]}
        buttonText={ADD_BUTTON_TITLE}
      />
      <HeaderSearch />
    </StyledHeader>
  );
};

export default Header;
