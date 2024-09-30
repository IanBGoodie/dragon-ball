import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharactersAPIService {
  constructor(
    private httpDb: HttpClient
  ) { }
  obtener(afiliacionAFiltrar:any):Observable<any> {
    return this.httpDb.get(`https://dragonball-api.com/api/characters?affiliation=${afiliacionAFiltrar}`)
  }
  obtenerPersonaje(id : any):Observable<any> {
    return this.httpDb.get(`https://dragonball-api.com/api/characters/${id}`)
  }
}