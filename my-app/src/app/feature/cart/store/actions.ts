import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";

export const cartAddMovie = createAction("Agregar Pelicula", props<{ movie: Movie }>());
export const cartDeleteMovie = createAction("Eliminar Pelicula", props<{ id: string }>());
export const cartClear = createAction("Limpiar carrito");
export const cartSetContent = createAction("Setear carrito", props<{ movies: Movie[] }>());
