import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PositionedSnackbar from "../../../components/general/PositionedSnackbar";

import { observer } from "mobx-react-lite";
import favoritesStore from "../../../store/FavoritesStore";
import Video from "../../../components/general/Video";

const FavoriteMovieDetail = observer(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSnackOpen, setIsSnackOpen] = useState(false);

  useEffect(() => {
    if (id) {
      favoritesStore.fetchMovie(id);
    }
  }, [id]);

  const removeFromFavorites = (id: string) => {
    favoritesStore.removeFavorite(id);
    setIsSnackOpen(true);
    navigate("/favorites");
  };

  const movie = id ? favoritesStore.movieData.get(id) : null;

  return (
    <>
      {movie ? (
        <div className="flex flex-col items-center justify-center py-4 m-auto">
          <Card sx={{ width: 300, height: 680 }} className="relative">
            <FavoriteIcon
              className="absolute top-2 right-2 cursor-pointer text-red-500 w-10"
              onClick={() => removeFromFavorites(movie?.imdbID)}
            />
            <Link to={"/" + movie?.imdbID}>
              <CardMedia
                component="img"
                alt="green iguana"
                sx={{ width: 320, height: 420, objectFit: "cover" }}
                image={movie?.Poster}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie?.Title}
              </Typography>
              <div className=" mb-4">
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {movie?.Plot}
                </Typography>
              </div>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Year: {movie?.Year}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Type: {movie?.Type}
              </Typography>
            </CardContent>
          </Card>
          <div className="mt-4">
            <Video />
          </div>
          <div className="absolute">
            <PositionedSnackbar
              open={isSnackOpen}
              message="Movie was removed from Favorites"
            />
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
});

export default FavoriteMovieDetail;
