import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly root: String = 'https://coderhouse-proyecto-final-java.herokuapp.com';
  headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.set('Access-Control-Allow-Origin', '*');
  }

  get<Type>(path: string): Observable<Type> {
    return this.http.get<Type>(this.root + path);
  }

  post<Type>(path: string, object: any): Observable<Type> {
    return this.http.post<Type>(this.root + path, object);
  }

  put<Type>(path: string, object: any): Observable<Type> {
    return this.http.put<Type>(this.root + path, object);
  }
}
