import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Person} from '../models/person';
import {HttpClient} from '@angular/common/http';
import {DatastoreService} from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiPeopleService {

  private _people = new BehaviorSubject<Person[]>([]);
  readonly people = this._people.asObservable();

  peopleLoaded = false;
  peopleInProgress = false;

  constructor(private http: HttpClient, private datastoreService: DatastoreService) { }

  loadPeople(target: string = 'https://swapi.dev/api/people/') {
    if (this.peopleLoaded === false && this.peopleInProgress === false) {
      this.http.get(target).subscribe(data => {
        for (const i in (data as any).results) {
          const person: Person = new Person((data as any).results[i]);
          this.datastoreService.setPerson(person);
        }
        this._people.next(Object.assign({}, this.datastoreService.getPersonStore()).people);
        if ((data as any).next) {
          this.loadPeople((data as any).next);
        } else {
          this.peopleLoaded = true;
          this.peopleInProgress = false;
        }
      });
    }
  }

  loadPerson(target) {
    return this.http.get(target);
  }
}
