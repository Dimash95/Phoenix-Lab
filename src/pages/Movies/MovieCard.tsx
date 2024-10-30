import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Skeleton from "@mui/material/Skeleton";
import PositionedSnackbar from "../../components/general/PositionedSnackbar";
import { useState } from "react";
import { observer } from "mobx-react";
import favoritesStore from "../../store/FavoritesStore";
import { IMovie } from "../../interfaces/IMovie";


interface MovieCardProps {
  movie: IMovie | null;
}

const MovieCard = observer(({ movie }: MovieCardProps) => {
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const handleFavoriteClick = (id?: string) => {
    if (id) {
      if (favoritesStore.favoriteMoviesIds.includes(id)) {
        return;
      } else {
        favoritesStore.addFavorite(id);
        setIsSnackOpen(true);
      }
    }
  };

  return movie ? (
    <>
      <Card sx={{ width: 300, maxHeight: 680 }} className="relative">
        <FavoriteIcon
          className="absolute top-2 right-2 cursor-pointer text-red-500 w-10"
          onClick={() => handleFavoriteClick(movie?.imdbID)}
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
      <div className="absolute">
        <PositionedSnackbar
          open={isSnackOpen}
          message="Movie was added in Favorites"
        />
      </div>
    </>
  ) : (
    <Skeleton variant="rectangular" width={210} height={118} />
  );
});

export default MovieCard;
