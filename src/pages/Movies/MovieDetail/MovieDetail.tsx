import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { observer } from "mobx-react-lite";
import movieStore from "../../../store/MovieDetailStore";
import Video from "../../../components/general/Video";

const MovieDetail = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      movieStore.fetchMovie(id);
    }
  }, [id]);

  return (
    <div>
      {!movieStore.loading ? (
        <div className="flex flex-col items-center justify-center py-4 m-auto">
          <MovieCard movie={movieStore.movie} />
          <div className="mt-4">
            <Video />
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
});

export default MovieDetail;
