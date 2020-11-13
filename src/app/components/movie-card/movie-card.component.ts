import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: Movie;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }
}
