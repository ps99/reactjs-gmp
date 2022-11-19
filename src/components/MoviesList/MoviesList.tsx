import StyledMoviesList, {
  StyledMoviesListItem,
  StyledImageWrapper,
  StyledTextWrapperLine,
  StyledTextWrapper,
  StyledContextMenu,
  StyledTitle,
  StyledDate,
  StyledGenre,
} from "./StyledMoviesList";
import { IMoviesList } from "./MoviesList.type";

const MoviesList = ({ moviesList }: IMoviesList) => {
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
          <StyledTextWrapperLine>
            <StyledTitle>{title}</StyledTitle>
            <StyledDate>{release_date?.split("-")[0]}</StyledDate>
          </StyledTextWrapperLine>

          <StyledTextWrapperLine>
            <StyledGenre>{genres?.join(" ")}</StyledGenre>
          </StyledTextWrapperLine>
        </StyledTextWrapper>
      </StyledMoviesListItem>
    );
  });

  return <StyledMoviesList>{moviesCards}</StyledMoviesList>;
};

export default MoviesList;
