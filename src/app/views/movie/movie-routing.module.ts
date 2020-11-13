
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieComponent} from './movie.component';


const routes: Routes = [
  { path: '', component: MovieComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class MovieRoutingModule { }
