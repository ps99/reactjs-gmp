import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import Sorter from "../../components/Sorter";
import StatusBar from "../../components/StatusBar";
import MoviesList from "../../components/MoviesList";
import movies from "../../data.json";
import * as I from "../../components/MoviesList/MoviesList.type";
import StyledMain, { StyledNav } from "./StyledMain";

const filters = ["all", "documentary", "comedy", "horror", "crime"];
const sorts = ["release", "rating", "title"];
const jsonData = ((data: any): I.IMoviesListItem[] => {
  return data.data;
})(movies);

const MainPage = () => {
  const [filterState, setFilterState] = useState(filters[0]);
  const [sortState, setSortState] = useState(sorts[0]);
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    setCountState(movies.totalAmount);
  }, []);

  const genreHandler = (e: React.PointerEvent<HTMLElement>) => {
    setFilterState(e.currentTarget.getAttribute("data-name"));
  };

  const sorterHandler = (e: any) => {
    setSortState(e.currentTarget.getAttribute("data-name"));
  };

  return (
    <StyledMain data-sort={sortState} data-filter={filterState}>
      <StyledNav>
        <Filter
          filtersList={filters}
          currentActive={filterState}
          onGenreClick={genreHandler}
        />
        <Sorter
          sortList={sorts}
          currentActive={sortState}
          onSorterClick={sorterHandler}
        />
      </StyledNav>
      <StatusBar quantity={countState} />
      <MoviesList moviesList={jsonData} />
    </StyledMain>
  );
};

export default MainPage;
