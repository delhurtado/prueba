import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {

  @Input('data') resena: any;

  constructor() { }

  ngOnInit() {
  
    
  }

  verDetallePelicula (resena: string) {
    console.log(resena)
    
  }

  
}
