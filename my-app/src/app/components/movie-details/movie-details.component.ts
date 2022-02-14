import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../../models/MovieDetail';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() detail: MovieDetail;
  actors: string[];
  directors: string[];
  constructor() {}

  ngOnInit(): void {
    this.actors = this.getPeopleByType('A');
    this.directors = this.getPeopleByType('D');
    console.log(this.detail);
  }

  getPeopleByType(type: string): string[] {
    return this.detail.personList
      .filter((person) => person.type == type)
      .map((person) => person.name);
  }

  getDirectors() {
    return this.directors.join(', ');
  }

  getActors() {
    return this.actors.join(', ');
  }
}
