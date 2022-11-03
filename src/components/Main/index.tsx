import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Sorter from "./Sorter";
import MoviesList from "./MoviesList";
import movies from "../../data.json";
import { IMovieListItem } from "./MoviesList";
import StyledMain, { StyledNav, StyledStatusBar } from "./StyledMain";

const filters = ["all", "documentary", "comedy", "horror", "crime"];
const sorts = ["release", "rating", "title"];
const json_data = ((data: any): IMovieListItem[] => {
  return data.data;
})(movies);

const Main = () => {
  const [filterState, setFilterState] = useState(filters[0]);
  const [sortState, setSortState] = useState(sorts[0]);
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    setCountState(movies.totalAmount);
  }, []);

  return (
    <StyledMain data-sort={sortState} data-filter={filterState}>
      <StyledNav>
        <Filter
          filtersList={filters}
          currentActive={filterState}
          onGenreClick={(e: any) =>
            setFilterState(e.currentTarget.getAttribute("data-name"))
          }
        />
        <Sorter
          sortList={sorts}
          currentActive={sortState}
          onSorterClick={(e: any) =>
            setSortState(e.currentTarget.getAttribute("data-name"))
          }
        />
      </StyledNav>
      <StyledStatusBar>
        {countState} movie{countState !== 1 && "s"} found
      </StyledStatusBar>
      <MoviesList moviesList={json_data} />
    </StyledMain>
  );
};

export default Main;
