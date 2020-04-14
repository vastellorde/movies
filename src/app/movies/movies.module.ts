import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MovieComponent } from './movie/movie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MoviesComponent, MovieComponent, DetailedMovieComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatToolbarModule,
    NgMatSearchBarModule,
    FormsModule
  ]
})
export class MoviesModule { }
