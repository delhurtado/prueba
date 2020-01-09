import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  // CONSUMIR API
  private urlApi = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=Icbm946pXJWEZ59ep2j4WQAHb4wdGAFu';
  resenas: any[] = [];
  

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.getResenas();
  }

  private getResenas() {
    this.httpClient.get(this.urlApi).subscribe((data) => { this.resenas = data['results'];},
    (error) => {
      console.error(error);
    }
    );
  }

}
