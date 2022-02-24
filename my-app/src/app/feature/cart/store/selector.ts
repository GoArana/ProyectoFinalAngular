import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../../../models/store';

 export const cartSelector = createFeatureSelector<State>('cart');

 export const cartItemsSelector = createSelector(
   cartSelector,
   (state: State) => state.movies
);
