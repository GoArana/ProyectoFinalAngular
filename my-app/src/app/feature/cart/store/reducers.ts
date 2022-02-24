import { createReducer, on } from '@ngrx/store';
import { State } from '../../../models/store';
import { cartSetContent } from './actions';

export const cartInitialState: State = { movies: [] };

const _cartReducer = createReducer(

  cartInitialState,
  on(cartSetContent, (state, { movies }) => {
      return {
      ...state,
      movies,
    };
  })
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
