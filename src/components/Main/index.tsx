import React, { useEffect, useState } from "react";
import image1 from "../../images/img1.jpg";
import image2 from "../../images/img2.jpg";

const filters = ["all", "documentary", "comedy", "horror", "crime"];

const sorts = ["release", "rating", "alphabetically"];

const movies = [
  {
    title: "Pulp Fiction",
    release: 1994,
    tags: ["Action & Adventure"],
    image: image2,
  },
];

const Main = () => {
  const [filterState, setFilterState] = useState(filters[0]);
  const [sortState, setSortState] = useState(sorts[0]);
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    setCountState(movies.length);
  }, []);

  const naviFilter = filters.map((item: string, i: number) => {
    console.log(item);
    return (
      <li key={i} className="navigation-filter__item">
        <button
          className={filterState === item ? "active" : undefined}
          value={item}
          onClick={(e) => setFilterState(e.currentTarget.value)}
        ></button>
      </li>
    );
  });

  const naviSorter = sorts.map((item: string, i: number) => {
    console.log(item);
    return (
      <button
        key={i}
        className={filterState === item ? "active" : undefined}
        value={item}
        onClick={(e) => setSortState(e.currentTarget.value)}
      ></button>
    );
  });

  const moviesItems = movies.map((item: any, i: number) => {
    console.log(item);
    return (
      <div key={i} className="movie-item">
        <div className="movie-item__image">
          <img src={image1} alt="" />
        </div>
        <div className="movie-item__title">
          <h2>Pulp Fiction</h2>
          <div className="movie-item__date">2004</div>
        </div>
        <div className="move-item__extra">Action &amp; Adventure</div>
      </div>
    );
  });

  return (
    <main
      id="main"
      className="main"
      data-sort={sortState}
      data-filter={filterState}
    >
      <nav className="main-navigation">
        <ul className="navigation-filter">{naviFilter}</ul>
        <details className="navigation-sorter">
          <summary className="navigation-sorter-label">
            <span>Sort by</span>
            {sortState}
            <i></i>
          </summary>
          <div className="navigation-sorter-list">{naviSorter}</div>
        </details>
      </nav>
      <div className="stattus-bar">
        {countState} movie{countState !== 1 && "s"} found
      </div>
      <div className="movies-grid">{moviesItems}</div>
    </main>
  );
};

export default Main;
