import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Digimon } from '../../../interfaces';

@Component({
  selector: 'app-digimon-todos',
  templateUrl: './digimon-todos.component.html'
})
export class DigimonTodosComponent implements OnInit {

  digimonList: Array<Digimon>;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getDigimonTodos();
  }

  getDigimonTodos(): void {
    this.proyectoService.getDigimonTodos().subscribe((data: Array<Digimon>) => {
      this.digimonList = data;
    });
  }

}