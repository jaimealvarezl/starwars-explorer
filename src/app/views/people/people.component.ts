import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, interval, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Person} from "../../models/person";
import {debounceTime, map, pluck, switchMap} from "rxjs/operators";
import {SubSink} from "subsink";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  private subscription1: Subscription;
  private subscription2: Subscription;
  private sink = new SubSink();

  search$ = new BehaviorSubject('');
  people: Person[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.sink.sink = this.search$.pipe(
      debounceTime(300),
      switchMap((search) => {
        return this.http.get<any>('https://swapi.dev/api/people', {
          params: {
            search
          }
        });
      }),
      pluck('results')
    ).subscribe((result) => {
      this.people = result;
      console.log(result);
    });


    this.sink.sink = interval(1000).pipe(
      map(() => this.search$.value),
      switchMap((search) => {
        return this.http.get<any>('https://swapi.dev/api/people', {
          params: {search}
        });
      }),
      // map(response => response.results)
      pluck('results')
    ).subscribe((result) => {
      this.people = result;
    });
  }

  ngOnDestroy(): void {
    // this.subscription1.unsubscribe();
    // this.subscription2.unsubscribe();
    this.sink.unsubscribe();
  }

  onSearchChange($event: any) {
    this.search$.next($event);
  }
}
