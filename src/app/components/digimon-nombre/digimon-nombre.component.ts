import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Digimon } from '../../../interfaces';

@Component({
  selector: 'app-digimon-nombre',
  templateUrl: './digimon-nombre.component.html'
})
export class DigimonNombreComponent implements OnInit {

  @Input()
  buscar: string;
  digimonList: Array<Digimon>;
  digimonListNombre: Array<Digimon>;

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getDigimonTodos();
  }

  getDigimonNombre(nombre: string): void {
    this.digimonListNombre = null;
    if (this.existeDigimon(nombre)) {
      this.proyectoService.getDigimonNombre(nombre).subscribe((data: Array<Digimon>) => {
        this.digimonListNombre = data;
      });
    }
  }

  existeDigimon(nombre: string): boolean {
    let retorno: boolean = false;
    this.digimonList.forEach(digimon => {
      if (digimon.name.toLowerCase() == nombre.toLowerCase()) {
        retorno = true;
      }
    });
    return retorno;
  }

  getDigimonTodos(): void {
    this.proyectoService.getDigimonTodos().subscribe((data: Array<Digimon>) => {
      this.digimonList = data;
    });
  }

}
