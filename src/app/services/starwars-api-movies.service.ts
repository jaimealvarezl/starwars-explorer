import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Movie} from '../models/movie';
import {HttpClient} from '@angular/common/http';
import {DatastoreService} from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiMoviesService {
  private _movies = new BehaviorSubject<Movie[]>([]);
  readonly movies = this._movies.asObservable();

  moviesLoaded = false;
  moviesInProgress = false;

  constructor(private http: HttpClient, private datastoreService: DatastoreService) { }

  loadMovies(target: string = 'https://swapi.dev/api/films/') {
    if (this.moviesLoaded === false && this.moviesInProgress === false) {
      this.http.get(target).subscribe(data => {
        for (const i in (data as any).results) {
          const movie: Movie = new Movie((data as any).results[i]);
          this.datastoreService.setMovie(movie);
        }
        this._movies.next(Object.assign({}, this.datastoreService.getMovieStore()).movies);
        if ((data as any).next) {
          this.loadMovies((data as any).next);
        } else {
          this.moviesLoaded = true;
          this.moviesInProgress = false;
        }
      });
    }
  }

  loadMovie(target) {
    return this.http.get(target);
  }
}
