import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteAltaComponent } from './cliente/cliente-alta/cliente-alta.component';
import { ClienteListadoComponent } from './cliente/cliente-listado/cliente-listado.component';
import { ClienteModificacionComponent } from './cliente/cliente-modificacion/cliente-modificacion.component';

const routes: Routes = [
  {path: "alta", component: ClienteAltaComponent},
  {path: "listado", component: ClienteListadoComponent},
  {path: "modificar/:id", component: ClienteModificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
