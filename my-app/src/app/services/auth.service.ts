import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { User } from '../models/User';
import { Register } from '../models/Register';
import { Login } from '../models/Login';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;
  user$: Subject<User> = new Subject<User>();
  constructor(private http: HttpService) {}

  login(login: Login) {
    return this.http.post<User>('/auth/login', login);
  }

  register(newUser: Register) {
    return this.http.put<User>('/auth/register', newUser);
  }

  setUser(user: User) {
    this.user = user;
    this.user$.next(this.user);
  }
  getUser() {
    return this.user$;
  }
}
