import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { DetalleComponent } from './detalle/detalle.component';
import { DetallePeliculasComponent } from './detalle-peliculas/detalle-peliculas.component';

// RUTAS

const routes: Routes = [
  { path: '', 
  component: PeliculasComponent, 
  },
  { path: 'detalle', 
      component: DetalleComponent
  }
       
];

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    ListaPeliculasComponent,
    DetalleComponent,
    DetallePeliculasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
