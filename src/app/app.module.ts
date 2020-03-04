import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DigimonTodosComponent } from './components/digimon-todos/digimon-todos.component';
import { DigimonNombreComponent } from './components/digimon-nombre/digimon-nombre.component';
import { DigimonNivelComponent } from './components/digimon-nivel/digimon-nivel.component';
import { DigimonComponent } from './components/digimon/digimon.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DigimonTodosComponent,
    DigimonNombreComponent,
    DigimonNivelComponent,
    DigimonComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
