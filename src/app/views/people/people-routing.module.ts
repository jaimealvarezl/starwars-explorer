
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from './people.component';


const routes: Routes = [
  { path: '', component: PeopleComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PeopleRoutingModule { }
