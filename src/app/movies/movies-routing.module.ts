import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { DetailedMovieComponent } from './detailed-movie/detailed-movie.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: ':slug',
    component: DetailedMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
