import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PeopleRoutingModule} from './people-routing.module';
import {MatCardModule} from '@angular/material/card';
import {PeopleComponent} from './people.component';
import {PersonCardComponent} from '../../components/person-card/person-card.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  declarations: [
    PeopleComponent,
    PersonCardComponent,
  ]
})
export class PeopleModule {}
