import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Movie } from '../../models/Movie';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  movies: Movie[] = [];
  source = new MatTableDataSource<Movie>([]);
  subscription: Subscription;
  noMovies: boolean;
  displayedColumns: string[] = ['image', 'name', 'price', 'actions'];

  constructor(
    private cartService: CartService,
    private movieService: MoviesService
  ) {}

  ngOnInit(): void {
    this.refreshMovies(this.cartService.getMovies());
    this.subscription = this.cartService.getMovies$().subscribe((movies) => {
      this.refreshMovies(movies);
    });
  }

  refreshMovies(movies: String[]) {
    this.movieService.getFilterMovies(movies).subscribe((movies) => {
      this.movies = movies;
      this.source.data = movies;
      this.noMovies = movies?.length == 0;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTotal() {
    let total = this.movies.reduce((total, movie) => total + movie.price, 0);
    console.log(total);
    total = total*4;
    return total;
  }

  deleteFromCart(id: string) {
    this.cartService.deleteFromCart(id);
  }
}
