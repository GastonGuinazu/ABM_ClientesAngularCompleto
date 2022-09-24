import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Despacho } from 'src/app/models/despacho';
import { ClienteService } from 'src/app/services/cliente.service';
import { DespachoService } from 'src/app/services/despacho.service';

@Component({
  selector: 'app-cliente-listado',
  templateUrl: './cliente-listado.component.html',
  styleUrls: ['./cliente-listado.component.css']
})
export class ClienteListadoComponent implements OnInit {

  clientes : Cliente [];

  private suscripcion = new Subscription();

  constructor(private clienteServicio : ClienteService,
              private despachoServicio: DespachoService,
              private route : Router) { }

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado(){
    this.suscripcion.add(
      this.despachoServicio.obtenerDespacho().subscribe({
        next: (despacho: Despacho[]) => {
          this.clienteServicio.obtenerCliente().subscribe({
            next: (cliente: Cliente[]) => {
              for (const cli of cliente) {
                const categoriaIndex = despacho.findIndex(
                  (x) => x.id === cli.tipoDespachoId
                );
                cli.tipoDespacho = despacho[categoriaIndex];
              }
              this.clientes = cliente;
            },
            error: () => {
              alert('error al comunicarse con la API');
            },
          });
        },
      })
    );
  }

  agregarCliente(){
    this.route.navigate(['alta']);
  }

  modificarCliente(id:string){
    this.route.navigate(['modificar',id])
  }


}
