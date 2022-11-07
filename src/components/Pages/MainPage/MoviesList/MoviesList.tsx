import StyledMoviesList, {
  StyledMoviesListItem,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledContextMenu,
} from "./StyledMoviesList";
import * as I from "./MoviesList.type";

const MoviesList = ({ moviesList }: I.IMoviesList) => {
  const moviesCards = moviesList.map((item) => {
    const {
      id,
      title,
      genres,
      poster_path,
      release_date,
      budget,
      overview,
      revenue,
      runtime,
      tagline,
      vote_average,
      vote_count,
    } = item;

    return (
      <StyledMoviesListItem key={id}>
        <StyledImageWrapper>
          <img src={poster_path} alt={title} />
          <StyledContextMenu />
        </StyledImageWrapper>
        <StyledTextWrapper>
          <li>
            <h2>{title}</h2>
            <span>{release_date?.split("-")[0]}</span>
          </li>

          <li>
            <i>{genres?.join(" ")}</i>
          </li>
        </StyledTextWrapper>
      </StyledMoviesListItem>
    );
  });

  return <StyledMoviesList>{moviesCards}</StyledMoviesList>;
};

export default MoviesList;
