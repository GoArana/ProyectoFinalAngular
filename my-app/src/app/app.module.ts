import { LoadingInterceptor } from './interceptors/loading-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './modules/angular-material.module';
import { HomeComponent } from './feature/home/home.component';
import { CartComponent } from './feature/cart/cart.component';
import { AuthenticationComponent } from './feature/authentication/authentication.component';
import { HeaderComponent } from './components/headbar/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviesListComponent } from './components/cards/cards.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import { InputErrorComponent } from './components/input-error/input-error.component';
import { CartWithoutTableComponent } from './feature/cart-without-table/cart-without-table.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NewMovieComponent } from './feature/new-movie/new-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignUpComponent,
    MoviesListComponent,
    MovieComponent,
    AuthenticationComponent,
    HomeComponent,
    CartComponent,
    MovieDetailsComponent,
    CartIconComponent,
    InputErrorComponent,
    CartWithoutTableComponent,
    MovieDetailComponent,
    LoadingComponent,
    NewMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
