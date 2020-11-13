import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';
import {Movie} from '../models/movie';
import {Person} from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  private  planetDataStore: { planets: Planet[]} = {planets: []};
  private  movieDataStore: { movies: Movie[]} = {movies: []};
  private  peopleDataStore: { people: Person[]} = {people: []};

  constructor() { }

  public setPlanet(planet: Planet) {
    this.planetDataStore.planets.push(planet);
  }

  public getPlanetStore() {
    return this.planetDataStore;
  }

  public setPerson(person: Person) {
    this.peopleDataStore.people.push(person);
  }

  public getPersonStore() {
    return this.peopleDataStore;
  }

  public setMovie(movie: Movie) {
    this.movieDataStore.movies.push(movie);
  }

  public getMovieStore() {
    return this.movieDataStore;
  }
}
