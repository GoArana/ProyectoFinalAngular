import { AuthenticationComponent } from './feature/authentication/components/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/components/home.component';
import { CartComponent } from './feature/cart/components/cart.component';
import { CartWithoutTableComponent } from './feature/cart-without-table/components/cart-without-table.component';
import { MovieDetailComponent } from './feature/movie-detail/components/movie-detail.component';
import { NewMovieComponent } from './feature/new-movie/components/new-movie.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    component: AuthenticationComponent,
    },
  {
    path: 'cart',
    loadChildren: () => import('./feature/cart/cart.module').then(m => m.CartModule)
    },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'newMovie',
    component: NewMovieComponent,  },
  { path: 'movie', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '**', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
