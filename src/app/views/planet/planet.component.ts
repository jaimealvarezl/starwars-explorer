import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Planet} from '../../models/planet';
import {StarwarsApiPlanetsService} from '../../services/starwars-api-planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {
  planets: Observable<Planet[]>;

  constructor(private apiService: StarwarsApiPlanetsService) { }

  ngOnInit() {
    this.planets = this.apiService.planets;
    this.apiService.loadPlanets();
  }
}
