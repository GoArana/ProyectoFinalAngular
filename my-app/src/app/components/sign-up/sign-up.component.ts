import { Component, OnInit, OnDestroy } from '@angular/core';
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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) {
    this.form = fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
  get name() {
    return this.form?.get('name')! as FormControl;
  }

  get lastname() {
    return this.form?.get('lastname')! as FormControl;
  }

  get email() {
    return this.form?.get('email')! as FormControl;
  }

  submit() {
    if (this.form.valid) {
      this.subscription = this.authService
        .register({
          name: this.name.value,
          lastname: this.lastname.value,
          email: this.email.value,
        })
        .subscribe((user) => {
          this.form.reset();
          this.authService.setUser(user);
          this.goToHome();
        });
    }
  }

  goToHome() {
    this.route.navigate(['home']);
  }
}
