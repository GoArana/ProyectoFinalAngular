import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../../models/Movie';
import { MoviesService } from '../../../services/movies.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  host: { class: 'u-container al-center pt30' },
})
export class MovieDetailComponent implements OnInit {
  movieID: string = '';
  movie: Movie;
  safeURL: SafeResourceUrl;
  loading: boolean = true;
  constructor(
    private movieService: MoviesService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.movieID = this.route.snapshot.paramMap.get('id')!;
    this.getMovie(this.movieID);
  }

  getMovie(id: string) {
    console.log('Buscando...');
    this.movieService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.movie.detail.trailer
      );
      this.loading = false;
    });
  }

  isMovieInCart(): boolean {
    return this.cartService.isMovieInCart(this.movie.id);
  }

  togleMovieInCart() {
    this.cartService.togleMovieInCart(this.movie.id);
  }
}
