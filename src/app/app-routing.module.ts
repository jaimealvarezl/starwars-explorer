import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './views/main/main.component';
import {PlanetComponent} from './views/planet/planet.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'movies',
    loadChildren: '../app/views/movie/movie.module#MovieModule'

  },
  {
    path: 'people',
    loadChildren: '../app/views/people/people.module#PeopleModule'
  },
  {
    path: 'planets',
    loadChildren: '../app/views/planet/planet.module#PlanetModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
