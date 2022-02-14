import { MovieDetail } from './MovieDetail';
export interface Movie {
  name: string;
  id: string;
  img: string;
  price: number;
  detail: MovieDetail;
}
