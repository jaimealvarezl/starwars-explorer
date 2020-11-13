import { Injectable } from '@angular/core';
import {Planet} from '../models/planet';
import {PlanetDialogComponent} from '../components/planet-dialog/planet-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Person} from '../models/person';
import {PersonDialogComponent} from '../components/person-dialog/person-dialog.component';
import {Movie} from '../models/movie';
import {MovieDialogComponent} from '../components/movie-dialog/movie-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openPlanetDialog(planet: Planet) {
    const dialogRef = this.dialog.open(PlanetDialogComponent, {
      width: '50%',
      data: planet
    });
  }

  openPersonDialog(person: Person) {
    const dialogRef = this.dialog.open(PersonDialogComponent, {
      width: '50%',
      data: person
    });
  }

  openMovieDialog(movie: Movie) {
    const dialogRef = this.dialog.open(MovieDialogComponent, {
      width: '50%',
      data: movie
    });
  }
}
