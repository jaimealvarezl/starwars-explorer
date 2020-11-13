import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from '../../models/movie';
import {StarwarsApiMoviesService} from '../../services/starwars-api-movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(private apiService: StarwarsApiMoviesService) { }

  ngOnInit() {
    this.movies = this.apiService.movies;
    this.apiService.loadMovies();
  }
}
