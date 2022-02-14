import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-without-table',
  templateUrl: './cart-without-table.component.html',
  styleUrls: ['./cart-without-table.component.css'],
})
export class CartWithoutTableComponent implements OnInit, OnDestroy {
  movies: Movie[] = [];
  moviesId: String[];
  subscrition: Subscription;
  constructor(
    private cartService: CartService,
    private movieService: MoviesService
  ) {}
  ngOnInit(): void {
    this.moviesId = this.cartService.getMovies();
    this.subscrition = this.movieService
      .getFilterMovies(this.moviesId)
      .subscribe((movies) => (this.movies = movies));
  }

  ngOnDestroy(): void {
    this.subscrition.unsubscribe();
  }

  deleteFromCart(id: string) {
    this.cartService.deleteFromCart(id);
  }
  getTotal() {
    return this.movies
      .map((movie) => movie.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
      .toString();
  }
}
