import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigimonComponent } from './components/digimon/digimon.component';
import { DigimonNivelComponent } from './components/digimon-nivel/digimon-nivel.component';
import { DigimonNombreComponent } from './components/digimon-nombre/digimon-nombre.component';
import { DigimonTodosComponent } from './components/digimon-todos/digimon-todos.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'digimon/:id', component: DigimonComponent },
  { path: 'digimonNivel', component: DigimonNivelComponent },
  { path: 'digimonNombre', component: DigimonNombreComponent },
  { path: 'digimonTodos', component: DigimonTodosComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
