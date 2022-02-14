import { Injectable } from '@angular/core';
import moviesData from '../data/moviesData';
import { Movie } from '../models/Movie';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { MovieInfo } from '../models/MovieInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpService) {}

  getMovies() {
    return this.http.get<Movie[]>('/movies');
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>('/movies/' + id);
  }

  getFilterMovies(ids: String[]): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies/filter?ids=' + ids.toString());
  }

  addMovie() {
    console.log('ADDING MOVIE');
    return this.http.post<Movie>('/movies/', {});
  }
}
