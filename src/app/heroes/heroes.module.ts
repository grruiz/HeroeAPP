import { NgModule } from '@angular/core';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeRoutingModule } from './heroe-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';




@NgModule({
  declarations: [
    AgregarComponent, 
    BuscarComponent,
    HeroeComponent, 
    HomeComponent, 
    ListadoComponent, 
    // TODO: FIX THIS RAFA PLS HeroeTarjetaComponent
    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    HeroeRoutingModule
  ]
})
export class HeroesModule { }
