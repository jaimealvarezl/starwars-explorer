import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../../models/person';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input()
  person: Person;

  constructor(public dialogService: DialogService) { }

  ngOnInit() {
  }
}
