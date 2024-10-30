import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteCard";

export default function Index() {
  const [favoriteMoviesIds, setFavoriteMoviesIds] = useState([]);

  const getFavoritesMovies = () => {
    setFavoriteMoviesIds(
      JSON.parse(localStorage.getItem("favoriteMoviesIds") || "[]"),
    );
  };

  useEffect(() => {
    getFavoritesMovies();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 py-4 px-20">
      {favoriteMoviesIds.length ? (
        favoriteMoviesIds.map((id: string) => (
          <FavoriteCard id={id} refetch={getFavoritesMovies} key={id} />
        ))
      ) : (
        <div className="text-4xl">Add favorite movies</div>
      )}
    </div>
  );
}
