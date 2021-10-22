import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiurl: string = 'https://restcountries.com/v3.1';
  private apiurl2: string = 'https://restcountries.com/v2';

  constructor(private http:HttpClient) { }

    buscarPais(termino:string):Observable<Pais[]>{
      const url = `${ this.apiurl }/name/${termino}`
       return this.http.get<Pais[]>(url);
    }

    buscarCapital(termino:string):Observable<Pais[]>{
      const url = `${ this.apiurl }/capital/${termino}`
       return this.http.get<Pais[]>(url);
    }

    verPais(id:string):Observable<Pais>{
      const url = `${ this.apiurl }/alpha/${id}`
       return this.http.get<Pais>(url);

    }


    buscarRegion(region:string):Observable<Pais[]>{
      const url2 = `${ this.apiurl2 }/regionalbloc/${region}`
       return this.http.get<Pais[]>(url2);
    }

}
