import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  showDetail: boolean = false;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  toggleDetail() {
    this.showDetail = !this.showDetail;
  }

  isMovieInCart() {
    return this.cartService.isMovieInCart(this.movie.id);
  }

  togleMovieInCart() {
    this.cartService.togleMovieInCart(this.movie.id);
  }
}
