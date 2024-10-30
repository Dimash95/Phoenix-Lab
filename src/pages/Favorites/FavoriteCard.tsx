import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import PositionedSnackbar from "../../components/general/PositionedSnackbar";
import { observer } from "mobx-react-lite";
import favoritesStore from "../../store/FavoritesStore";

interface FavoriteCardProps {
  id: string;
  refetch: () => void;
}

const FavoriteCard = observer(({ id, refetch }: FavoriteCardProps) => {
  const [isSnackOpen, setIsSnackOpen] = useState(false);

  useEffect(() => {
    favoritesStore.fetchMovie(id);
  }, [id]);

  const removeFromFavorites = (id: string) => {
    favoritesStore.removeFavorite(id);
    setIsSnackOpen(true);
    refetch();
  };

  const movie = favoritesStore.movieData.get(id);

  return (
    <>
      <Card sx={{ maxWidth: 320, height: 680 }} className="relative">
        <FavoriteIcon
          className="absolute top-2 right-2 cursor-pointer text-red-500 w-10"
          onClick={() => movie?.imdbID && removeFromFavorites(movie.imdbID)}
        />
        <Link to={"/favorites/" + movie?.imdbID}>
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
      
      <div className="absolute">
        <PositionedSnackbar
          open={isSnackOpen}
          message="Movie was removed from Favorites"
        />
      </div>
    </>
  );
});

export default FavoriteCard;
