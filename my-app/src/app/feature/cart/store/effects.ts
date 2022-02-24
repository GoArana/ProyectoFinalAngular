import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs/operators";
import { Movie } from "src/app/models/Movie";
import { CartService } from "src/app/services/cart.service";
import { cartAddMovie, cartClear, cartDeleteMovie, cartSetContent } from "src/app/feature/cart/store/actions";

@Injectable()
export class CartEffects {
  constructor(
    private actions: Actions,
    private cartService: CartService,
    private router: Router
  ) { }

//   cartAddItem$ = createEffect(() =>
//     this.actions.pipe(
//       ofType(cartAddMovie),
//       map((action) => action.movie),
//       switchMap((movie) => this.cartService.addMovie(movie)),
//       tap(() => this.router.navigate(["/cart"]))

//     )
//   );

//   cartDeleteItem$ = createEffect(() =>
//     this.actions.pipe(
//       ofType(cartDeleteMovie),
//       map((action) => action.id),
//       switchMap((id) => this.cartService.deleteFromCart(id)),
//       tap(() => this.router.navigate(["/cart"]))
//     )
//   );
//   cartClean$ = createEffect(() =>
//   this.actions.pipe(
//        ofType(cartClear),
//        switchMap(action => this.cartService.cleanCart()),
//        map(() => cartSetContent({movies: [] as Movie[] })),
//      )
//  );
}
