import React from "react";
import Button from "../../Button";
import StyledSearch, { StyledInput, StyledTitle } from "./StyledSearch";

const HeaderSearch = () => {
  const SEARCH_BUTTON_TITLE = "search";
  const searchHandler = (e: any) => {
    console.log(e.currentTarget);
  };

  return (
    <StyledSearch>
      <StyledTitle>Find your movie</StyledTitle>
      <StyledInput
        placeholder="What do you want to watch?"
        type="text"
        name="search"
        id="search"
      />
      <Button
        handler={searchHandler}
        buttonText={SEARCH_BUTTON_TITLE}
        variant="primary"
      />
    </StyledSearch>
  );
};

export default HeaderSearch;
