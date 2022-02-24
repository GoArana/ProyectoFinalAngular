import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CartComponent } from "./components/cart.component";
import { CartRoutingModule } from "./cart-routing.module";
// import { StoreModule } from '@ngrx/store';
// import { cartReducer } from 'src/app/feature/cart/store/reducers';
// import { EffectsModule } from '@ngrx/effects';
// import { CartEffects } from 'src/app/feature/cart/store/effects';
// import { CartService } from 'src/app/services/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule,
    // StoreModule.forFeature('cart',cartReducer),
    // EffectsModule.forFeature([CartEffects])
  ],
  // providers: [CartService]
})
export class CartModule { }



