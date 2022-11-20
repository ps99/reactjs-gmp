export interface IMoviesListItem {
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

export interface IMoviesList {
  moviesList: IMoviesListItem[];
}
