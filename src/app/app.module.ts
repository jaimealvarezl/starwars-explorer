import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MainComponent } from './views/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { PlanetDialogComponent } from './components/planet-dialog/planet-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PersonDialogComponent } from './components/person-dialog/person-dialog.component';
import { MovieDialogComponent } from './components/movie-dialog/movie-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PlanetDialogComponent,
    PersonDialogComponent,
    MovieDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatGridListModule,

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PlanetDialogComponent,
    PersonDialogComponent,
    MovieDialogComponent
  ]
})
export class AppModule { }
