import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IMovie } from "../interfaces/IMovie";

class MovieDetailStore {
  movie: IMovie | null = null;
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchMovie(id: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=7e59b8de&i=${id}&type=movie`,
      );
      this.movie = response.data;
    } catch (error) {
      this.error = "Error fetching movie";
      console.error(this.error, error);
    } finally {
      this.loading = false;
    }
  }
}

const movieDetailStore = new MovieDetailStore();
export default movieDetailStore;
