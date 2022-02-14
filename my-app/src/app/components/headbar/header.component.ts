import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  show: boolean;
  user: User;
  subscriptionUser: Subscription;
  subscriptionRouter: Subscription;
  constructor(
    private router: Router,
    private service: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.subscriptionUser = this.authService
      .getUser()
      .subscribe((user) => (this.user = user));
    this.subscriptionRouter = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.show = event.url != '/auth' && event.url != '/';
        if (!this.show) {
          this.service.cleanCart();
        }
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscriptionRouter) this.subscriptionRouter.unsubscribe();
    if (this.subscriptionUser) this.subscriptionUser.unsubscribe();
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  isUserAdmin() {
    return this.user && this.user.role == 'ADMIN';
  }
}
