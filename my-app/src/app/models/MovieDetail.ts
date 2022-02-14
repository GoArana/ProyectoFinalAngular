import { PersonList } from './MovieInfo';

export interface MovieDetail {
  description: string;
  duration: string;
  category: string;
  trailer: string;
  personList: PersonList[];
}
