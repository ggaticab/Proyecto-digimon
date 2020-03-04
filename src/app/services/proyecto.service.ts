import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Digimon } from '../../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  constructor(private http: HttpClient) {}

  getDigimonTodos(): Observable<Array<Digimon>> {
    return this.http.get<Array<Digimon>>(`${environment.digimonURL}`)
  }

  getDigimonId(id: number): Observable<Array<Digimon>> {
    return this.http.get<Array<Digimon>>(`${environment.digimonURL}/id/${id}`)
  }

  getDigimonNombre(name: string): Observable<Array<Digimon>> {
    return this.http.get<Array<Digimon>>(`${environment.digimonURL}/name/${name}`)
  }

  getDigimonNivel(level: string): Observable<Array<Digimon>> {
    return this.http.get<Array<Digimon>>(`${environment.digimonURL}/level/${level}`)
  }
}