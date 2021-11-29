import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones:string[]=['America', 'Asia', 'Europe', 'OCeania', 'Africa'];

  paises:Pais[]=[]

  regionActiva: string = "";
  region:string =""
  hayError:boolean =  false
  
  constructor(private paisService:PaisService) { }

  getClasesCSS(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn-outline-primary'
  }
  
  activarRegion(region:string){
    if(region == this.regionActiva){
      return
    }
    this.regionActiva = region;
    this.paises = []

    this.paisService.buscarRegion(region)
      .subscribe((paises) => this.paises = paises);;
      
  }

  

}
