import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Digimon } from '../../../interfaces';

@Component({
  selector: 'app-digimon-nivel',
  templateUrl: './digimon-nivel.component.html'
})
export class DigimonNivelComponent implements OnInit {

  @Input()
  buscar: string;
  levelList: Array<string> = [];
  digimonListLevel: Array<Digimon>;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getLevelTodos();
  }

  getDigimonNivel(nivel: string): void {
    this.proyectoService.getDigimonNivel(nivel).subscribe((data: Array<Digimon>) => {
      this.digimonListLevel = data;
    });
  }

  getLevelTodos(): void {
    this.proyectoService.getDigimonTodos().subscribe((data: Array<Digimon>) => {
      data.forEach(digimon => {
        if (!this.levelList.includes(digimon.level))
          this.levelList.push(digimon.level);
      });
    });
  }

}
 