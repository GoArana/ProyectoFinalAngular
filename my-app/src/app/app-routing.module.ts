import { AuthenticationComponent } from './feature/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { CartComponent } from './feature/cart/cart.component';
import { CartWithoutTableComponent } from './feature/cart-without-table/cart-without-table.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { NewMovieComponent } from './feature/new-movie/new-movie.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'newMovie',
    component: NewMovieComponent,
  },
  { path: 'movie', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
