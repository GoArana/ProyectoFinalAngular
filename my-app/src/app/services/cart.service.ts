import { Injectable } from '@angular/core';
import { MoviesService } from './movies.service';
import { Movie } from '../models/Movie';
import moviesData from '../data/moviesData';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private moviesInCart: String[] = [];
  private movies$: Subject<String[]> = new Subject<String[]>();

  constructor(private moviesService: MoviesService) {}

  togleMovieInCart(id: string) {
    if (id && this.isMovieInCart(id)) {
      this.deleteFromCart(id);
    } else {
      this.addMovie(id);
    }
  }
  isMovieInCart(id: string) {
    return this.moviesInCart.includes(id);
  }

  addMovie(id: string) {
    if (!this.moviesInCart.includes(id)) {
      this.moviesInCart.push(id);
      this.movies$.next(this.moviesInCart);
    }
  }
  deleteFromCart(id: string) {
    const index = this.moviesInCart.indexOf(id);
    if (index > -1) {
      this.moviesInCart.splice(index, 1);
      this.movies$.next(this.moviesInCart);
    }
  }

  getCartItems(): number {
    return this.moviesInCart.length;
  }
  getMovies(): String[] {
    return this.moviesInCart;
  }

  getMovies$(): Observable<String[]> {
    return this.movies$.asObservable();
  }

  cleanCart() {
    this.moviesInCart = [];
  }
}
