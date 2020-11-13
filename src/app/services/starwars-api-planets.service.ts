import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Planet} from '../models/planet';
import {HttpClient} from '@angular/common/http';
import {DatastoreService} from './datastore.service';

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiPlanetsService {
  private _planets = new BehaviorSubject<Planet[]>([]);
  readonly planets = this._planets.asObservable();

  planetsLoaded = false;
  planetsInProgress = false;


  constructor(private http: HttpClient, private datastoreService: DatastoreService) { }

  loadPlanets(target: string = 'https://swapi.dev/api/planets/') {
    if (this.planetsLoaded === false && this.planetsInProgress === false) {
      this.http.get(target)
        .pipe()
        .subscribe(data => {
        for (const i in (data as any).results) {
          const planet: Planet = new Planet((data as any).results[i]);
          this.datastoreService.setPlanet(planet);
        }
        this._planets.next(Object.assign({}, this.datastoreService.getPlanetStore()).planets);
        if ((data as any).next) {
          this.loadPlanets((data as any).next);
        } else {
          this.planetsLoaded = true;
          this.planetsInProgress = false;
        }
      });
    }
  }

  loadPlanet(target) {
    return this.http.get(target);
  }
}
