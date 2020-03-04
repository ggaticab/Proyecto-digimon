import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Digimon } from '../../../interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digimon',
  templateUrl: './digimon.component.html'
})
export class DigimonComponent implements OnInit {

  digimonList: Array<Digimon>;

  constructor(private router: ActivatedRoute, private proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.router.params.subscribe(routeParams => {
      this.getDigimonId(routeParams.id);
    });
  }

  getDigimonId(id: number): void {
    this.proyectoService.getDigimonId(id).subscribe((data: Array<Digimon>) => {
      this.digimonList = data;
    });
  }

}
