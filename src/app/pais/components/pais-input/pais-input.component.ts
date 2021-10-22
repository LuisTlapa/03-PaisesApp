import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string ='';

  debouncer: Subject<string> = new Subject() // para las sugerencia

  termino : string = ""

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300)) // tiempo para emitir valores
      .subscribe( valor => {
        this.onDebounce.emit(valor)
      console.log('Sugerencia', valor);
    })
  }

  buscar(){
    this.onEnter.emit(this.termino)
    console.log(this.termino)
  }
  teclaPrecionada(){
    this.debouncer.next(this.termino );
  }

}
