import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  hidePassword: boolean = true;
  subscripcion: Subscription;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscripcion) this.subscripcion.unsubscribe();
  }

  get user() {
    return this.form?.get('user')! as FormControl;
  }

  get password() {
    return this.form?.get('password')! as FormControl;
  }

  submit() {
    if (this.form.valid) {
      this.subscripcion = this.authService
        .login({
          user: this.user.value,
          password: this.password.value,
        })
        .subscribe((user) => {
          this.form.reset();
          this.authService.setUser(user);
          this.goMainPage();
        });
    }
  }
  goMainPage() {
    this.router.navigate(['home']);
  }
}
