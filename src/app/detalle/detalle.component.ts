import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  // CONSUMIR API
  private urlApi = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';
  detalles: any[] = [];
  

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getDetalle();
  }

  private getDetalle() {
    this.httpClient.get(this.urlApi).subscribe((data) => { this.detalles = data['results'];},
    (error) => {
      console.error(error);
    }
    );
  }

}
