import { makeAutoObservable } from "mobx";
import axios from "axios";
import { IMovie } from "../interfaces/IMovie";

class MovieListStore {
  movieList: IMovie[] = [];
  searchQuery: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  setSearchQuery(query: string) {
    this.searchQuery = query;
  }

  async fetchMovies() {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=7e59b8de&s=${this.searchQuery}&type=movie&page=1`,
      );
      if (response.data.Search) {
        this.movieList = response.data.Search;
      } else {
        this.movieList = [];
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      this.movieList = [];
    }
  }
}

const movieListStore = new MovieListStore();
export default movieListStore;
