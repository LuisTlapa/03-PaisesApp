import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiurl: string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

    buscarPais(termino:string):Observable<Pais[]>{
      const url = `${ this.apiurl }/name/${termino}`
       return this.http.get<Pais[]>(url);

    }
  

}
