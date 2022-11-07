import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Sorter from "./Sorter";
import StatusBar from "./StatusBar";
import MoviesList from "./MoviesList";
import movies from "../../../data.json";
import * as I from "./MoviesList/MoviesList.type";
import StyledMain, { StyledNav } from "./StyledMain";

const filters = ["all", "documentary", "comedy", "horror", "crime"];
const sorts = ["release", "rating", "title"];
const json_data = ((data: any): I.IMoviesListItem[] => {
  return data.data;
})(movies);

const MainPage = () => {
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
      <StatusBar quantity={countState} />
      <MoviesList moviesList={json_data} />
    </StyledMain>
  );
};

export default MainPage;
