import StyledMovieList, {
  StyledMovieListItem,
  StyledImageWrapper,
  StyledTextWrapper,
  StyledContextMenu,
} from "./StyledMoviesList";

export interface IMovieListItem {
  id?: number;
  budget?: number;
  genres?: Array<string>;
  overview?: string;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  tagline?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
}

export interface IMovieList {
  moviesList: IMovieListItem[];
}

const MoviesList = ({ moviesList }: IMovieList) => {
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
      <StyledMovieListItem key={id}>
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
      </StyledMovieListItem>
    );
  });

  return <StyledMovieList>{moviesCards}</StyledMovieList>;
};

export default MoviesList;
