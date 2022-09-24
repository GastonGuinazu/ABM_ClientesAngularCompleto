import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteAltaComponent } from './cliente/cliente-alta/cliente-alta.component';
import { ClienteBajaComponent } from './cliente/cliente-baja/cliente-baja.component';
import { ClienteListadoComponent } from './cliente/cliente-listado/cliente-listado.component';
import { ClienteModificacionComponent } from './cliente/cliente-modificacion/cliente-modificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteAltaComponent,
    ClienteBajaComponent,
    ClienteListadoComponent,
    ClienteModificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
