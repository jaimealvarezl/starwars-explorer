import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Planet} from '../../models/planet';
import {Movie} from '../../models/movie';
import {Person} from '../../models/person';
import {StarwarsApiMoviesService} from '../../services/starwars-api-movies.service';
import {StarwarsApiPeopleService} from '../../services/starwars-api-people.service';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-planet-dialog',
  templateUrl: './planet-dialog.component.html',
})
export class PlanetDialogComponent implements OnInit {

  movies: Movie[] = new Array<Movie>();
  movieLoading = false;
  residents: Person[] = new Array<Person>();
  residentLoading = false;

  constructor(
    public dialogRef: MatDialogRef<PlanetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public planet: Planet,
    public movieApiService: StarwarsApiMoviesService,
    public peopleApiService: StarwarsApiPeopleService,
    public dialogService: DialogService) {

    for (const i in planet.films) {
      this.movieLoading = true;
      movieApiService.loadMovie(planet.films[i]).subscribe(data => {
        this.movies.push(new Movie(data));
        this.movieLoading = false;
      });
    }

    for (const i in planet.residents) {
      this.residentLoading = true;
      peopleApiService.loadPerson(planet.residents[i]).subscribe(data => {
        this.residents.push(new Person(data));
        this.residentLoading = false;
      });
    }
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
