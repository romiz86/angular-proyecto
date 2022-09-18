import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardsoftComponent } from './componentes/hardsoft/hardsoft.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { CharlamosComponent } from './componentes/charlamos/charlamos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PresentacionComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardsoftComponent,
    ProyectosComponent,
    AsideComponent,
    CharlamosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
