import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Despacho } from 'src/app/models/despacho';
import { ClienteService } from 'src/app/services/cliente.service';
import { DespachoService } from 'src/app/services/despacho.service';

@Component({
  selector: 'app-cliente-modificacion',
  templateUrl: './cliente-modificacion.component.html',
  styleUrls: ['./cliente-modificacion.component.css']
})
export class ClienteModificacionComponent implements OnInit, OnDestroy {

  @Input() clientes: Cliente;
  despachos: Despacho[];

  private suscripcion = new Subscription();

  constructor(private clienteServicio: ClienteService,
    private despachoServicio: DespachoService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.suscripcion.add(
      this.despachoServicio.obtenerDespacho().subscribe({
        next: (respuesta: Despacho[]) => {
          this.despachos = respuesta;
          this.cargarJugador();
        },
        error: () => {
          alert('error al obtener las categorias');
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  guardar() {
    this.suscripcion.add(
      this.clienteServicio.modificarCliente(this.clientes).subscribe({
        next: () => {
          this.route.navigate(['listado']);
        },
        error: () => {
          alert('error al intentar guardar el articulo');
        },
      })
    );
  }

  cancelar(){
    this.route.navigate(['listado']);
  }

  private cargarJugador() {
    this.suscripcion.add(
      this.activatedRoute.params.subscribe({
        next: (params) => {
          const id = params['id'];
          this.clienteServicio.obtenerPorId(id).subscribe({
            next: (respuesta: Cliente) => {
              this.clientes = respuesta;
            },
            error: () => {
              alert('error al obtener el articulo');
            },
          });
        },
      })
    );
  } 

}
