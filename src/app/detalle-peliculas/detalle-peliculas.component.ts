import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detalle-peliculas',
  templateUrl: './detalle-peliculas.component.html',
  styleUrls: ['./detalle-peliculas.component.css']
})
export class DetallePeliculasComponent implements OnInit {

  @Input('data') detalle: any;
  
  constructor() { }

  ngOnInit() {
  }

}
