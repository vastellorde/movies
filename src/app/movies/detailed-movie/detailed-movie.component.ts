import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/movie.model';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-movie',
  templateUrl: './detailed-movie.component.html',
  styleUrls: ['./detailed-movie.component.scss']
})
export class DetailedMovieComponent implements OnInit {
  movie: Movie;
  movieList: Array<Movie> = [];
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.slug);
      this.movie = this.movieService.getMovie(params.slug);
      this.movieList = [...this.movieService.getByGenres(this.movie.genres)];
    });
  }
  movieSelected() {}
}
