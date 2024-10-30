import { useEffect } from "react";
import { observer } from "mobx-react";
import movieListStore from "../../store/MovieListStore";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movieTitle: string;
}

const MovieList = observer(({ movieTitle }: MovieListProps) => {
  useEffect(() => {
    movieListStore.setSearchQuery(movieTitle);
    movieListStore.fetchMovies();
  }, [movieTitle]);

  return (
    <div className="flex flex-wrap justify-center gap-10">
      {movieListStore.movieList.map((movie, index) => (
        <MovieCard movie={movie} key={index} />
      ))}
    </div>
  );
});

export default MovieList;
