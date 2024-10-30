import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IMovie } from "../interfaces/IMovie";

class FavoritesStore {
  favoriteMoviesIds: string[] = [];
  movieData: Map<string, IMovie> = new Map();

  constructor() {
    makeAutoObservable(this);
    this.loadFavorites();
  }

  addFavorite(id: string) {
    if (!this.favoriteMoviesIds.includes(id)) {
      this.favoriteMoviesIds.push(id);
      localStorage.setItem(
        "favoriteMoviesIds",
        JSON.stringify(this.favoriteMoviesIds),
      );
    }
  }

  removeFavorite(id: string) {
    this.favoriteMoviesIds = this.favoriteMoviesIds.filter(
      movieId => movieId !== id,
    );
    localStorage.setItem(
      "favoriteMoviesIds",
      JSON.stringify(this.favoriteMoviesIds),
    );
  }

  loadFavorites() {
    const savedFavorites = localStorage.getItem("favoriteMoviesIds");
    if (savedFavorites) {
      this.favoriteMoviesIds = JSON.parse(savedFavorites);
    }
  }

  async fetchMovie(id: string) {
    if (!this.movieData.has(id)) {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=7e59b8de&i=${id}&type=movie`,
        );
        runInAction(() => {
          this.movieData.set(id, response.data);
        });
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
    return this.movieData.get(id);
  }
}

const favoritesStore = new FavoritesStore();
export default favoritesStore;
