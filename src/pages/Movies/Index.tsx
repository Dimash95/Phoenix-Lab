import { useState } from "react";

import MovieSearcher from "./MovieSearcher";
import MovieList from "./MovieList";

function Movies() {
  const [movieTitle, setMovieTitle] = useState("Avengers");

  const changeMovieTitle = (searchedMovieTitle: string) => {
    setMovieTitle(searchedMovieTitle);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-4 px-20">
      <MovieSearcher changeMovieTitle={changeMovieTitle} />
      <MovieList movieTitle={movieTitle} />
    </div>
  );
}

export default Movies;
