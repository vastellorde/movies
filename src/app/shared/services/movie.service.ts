import { Injectable } from '@angular/core';
import { movies } from './movie.mock-data';
import { genreType, GenreType, Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies = movies;

  getAllMovies(): Array<Movie> {
    return this.movies;
  }
  getByName(name: string): Array<Movie> {
    return this.movies.filter(movie => movie.name.toLowerCase() === name.toLowerCase());
  }
  getMovie(slug: string): Movie {
    return this.movies.find(c => c.key === slug);
  }
  getByGenre(genre: GenreType) {
    return this.movies.filter(movie => {
      if (movie.genres.indexOf(genre) !== -1) {
        return true;
      }
    });
  }
  getByGenres(genres: Array<GenreType>) {
    return this.movies.filter(movie => {
      for (const genre of genres) {
        return movie.genres.includes(genre);
      }
    });
  }
  getGenreList() {
    return genreType;
  }
}
