import MovieCard, { IMovieCard } from "./MovieCard";
// export interface IMovieCard {
//   id?: number;
//   budget?: number;
//   genres?: Array<string>;
//   overview?: string;
//   release_date?: string;
//   revenue?: number;
//   runtime?: number;
//   tagline?: string;
//   title?: string;
//   vote_average?: number;
//   vote_count?: number;
//   poster_path?: string;
// }

export interface IMovieList {
  moviesList: IMovieCard[];
}

const MoviesList = ({ moviesList }: IMovieList) => {
  const moviesCards = moviesList.map((item) => {
    // const {
    //   id,
    //   title,
    //   genres,
    //   poster_path,
    //   release_date,
    //   budget,
    //   overview,
    //   revenue,
    //   runtime,
    //   tagline,
    //   vote_average,
    //   vote_count,
    // } = item;

    // return (
    //   <div key={id} className="movie-item">
    //     <div className="movie-item__image">
    //       <img src={poster_path} alt={title} />
    //     </div>
    //     <div className="movie-item__title">
    //       <h2>{title}</h2>
    //       <div className="movie-item__date">{release_date}</div>
    //       <div className="movie-item__tags">{genres}</div>
    //     </div>
    //   </div>
    // );

    return <MovieCard key={item.id} movieData={item} />;
  });

  return <div className="movies-grid">{moviesCards}</div>;
};

export default MoviesList;