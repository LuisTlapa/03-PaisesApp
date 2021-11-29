import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';
import { tap } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiurl: string = 'https://restcountries.com/v3.1';
  private apiurl2: string = 'https://restcountries.com/v3.1'
  get htppParams (){
    return new HttpParams().set('fields','name,capital,population,flag,cca2');
  }

  constructor(private http:HttpClient) { }

    buscarPais(termino:string):Observable<Pais[]>{
      const url = `${ this.apiurl }/name/${termino}`
       return this.http.get<Pais[]>(url,{params:this.htppParams});
    }

    buscarCapital(termino:string):Observable<Pais[]>{
      const url = `${ this.apiurl }/capital/${termino}`
       return this.http.get<Pais[]>(url,{params:this.htppParams});
    }

    verPais(id:string):Observable<Pais>{
      const url = `${ this.apiurl2 }/alpha/${ id }`
       return this.http.get<Pais>(url);

    }


    buscarRegion(region:string):Observable<Pais[]>{
      const url = `${ this.apiurl }/region/${region}`;
       return this.http.get<Pais[]>(url,{params:this.htppParams})
        .pipe(
          tap(console.log)
        )
    }

}
