import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Person} from '../../models/person';
import {Planet} from '../../models/planet';
import {DialogService} from '../../services/dialog.service';
import {Movie} from '../../models/movie';
import {HttpClient} from '@angular/common/http';
import {combineLatest, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
})
export class PersonDialogComponent implements OnInit {

  homeworld: Planet;
  homeworldLoading = false;
  movies: Movie[] = new Array<Movie>();
  movieLoading = false;
  public innerWidth: any;

  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public person: Person,
  ) {

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
