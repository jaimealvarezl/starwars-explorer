import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MovieRoutingModule} from './movie-routing.module';
import {MovieComponent} from './movie.component';
import {MovieCardComponent} from '../../components/movie-card/movie-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    MovieComponent,
    MovieCardComponent
  ]
})
export class MovieModule {}
