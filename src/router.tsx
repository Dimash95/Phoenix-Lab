import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies/Index";
import MovieSingle from "./pages/Movies/MovieDetail/MovieDetail";
import Favorites from "./pages/Favorites/Index";
import FavoriteMovieDetail from "./pages/Favorites/FavoriteMovieDetail/FavoriteMovieDetail";

const router = (
  <Routes>
    <Route path="/" element={<Movies />} />
    <Route path="/:id" element={<MovieSingle />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/favorites/:id" element={<FavoriteMovieDetail />} />
  </Routes>
);

export default router;
