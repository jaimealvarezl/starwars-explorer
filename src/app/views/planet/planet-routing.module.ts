
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetComponent} from './planet.component';


const routes: Routes = [
  { path: '', component: PlanetComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PlanetRoutingModule { }
