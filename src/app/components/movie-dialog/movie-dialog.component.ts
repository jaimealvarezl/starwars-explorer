import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Movie} from '../../models/movie';
import {StarwarsApiPlanetsService} from '../../services/starwars-api-planets.service';
import {DialogService} from '../../services/dialog.service';
import {StarwarsApiPeopleService} from '../../services/starwars-api-people.service';
import {Person} from '../../models/person';
import {Planet} from '../../models/planet';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {

  characters: Person[] =  Array<Person>();
  characterLoading = false;
  planets: Planet[] = Array<Planet>();
  planetLoading = false;
  innerWidth: number;

  constructor(
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movie: Movie,
    public planetApiService: StarwarsApiPlanetsService,
    public peopleApiService: StarwarsApiPeopleService,
    public dialogService: DialogService) {

    for (const i in movie.characters) {
      this.characterLoading = true;
      peopleApiService.loadPerson(movie.characters[i]).subscribe(data => {
        this.characters.push(new Person(data));
        this.characterLoading = false;
      });
    }

    for (const i in movie.planets) {
      this.planetLoading = true;
      planetApiService.loadPlanet(movie.planets[i]).subscribe(data => {
        this.planets.push(new Planet(data));
        this.planetLoading = false;
      });
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
