export interface MovieInfo {
  name: string;
  id: string;
  rating: string;
  distributor: string;
  description: string;
  duration: string;
  category: string;
  URLPoster: string;
  URLTrailerYoutube: string;
  personList: PersonList[];
}

export interface PersonList {
  type: string;
  name: string;
}
