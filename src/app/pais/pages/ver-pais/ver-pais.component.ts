import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap , tap} from "rxjs/operators"; // recibe un observable y regresa un observable
import { Pais } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: Pais[]=[];
 
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService:PaisService
    ) { } // ActivateRote para cambios en el URL

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.verPais( id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );
    
    /*this.activatedRoute.params // acceso al observable donde estan los parametros
    .pipe(
      switchMap(({id}) => this.paisService.verPais(id)),
      tap(console.log)
      )
    .subscribe(pais => this.pais = pais);
    */
    /* this.activatedRoute.params
    .subscribe( ({id}) =>{
      console.log(id)
      this.paisService.verPais(id)
      .subscribe(pais=>{
        console.log(pais)
      })
    } )*/ //se mejorara
  }

}
