import StyledMoviesList, {
  StyledMoviesListItem,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledContextMenu,
  StyledTitle,
  StyledDate,
  StyledGenre,
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
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>{release_date?.split("-")[0]}</StyledDate>
          </li>

          <li>
            <StyledGenre>{genres?.join(" ")}</StyledGenre>
          </li>
        </StyledTextWrapper>
      </StyledMoviesListItem>
    );
  });

  return <StyledMoviesList>{moviesCards}</StyledMoviesList>;
};

export default MoviesList;
