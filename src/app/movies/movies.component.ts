import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { genreType, GenreType, Movie } from '../shared/models/movie.model';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movieList: Array<Movie> = [];
  selectedGenre: GenreType;
  genres = this.movieService.getGenreList();
  searchField = '';
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieList = this.movieService.getAllMovies();
  }
  selectGenre(genre: any) {
    this.selectedGenre = genre;
    this.movieList = this.movieService.getByGenre(genre);
  }
  onSearch() {
    this.movieList = this.movieService.getByName(this.searchField);
  }
  onClose() {
    this.movieList = this.movieService.getAllMovies();
  }
}
