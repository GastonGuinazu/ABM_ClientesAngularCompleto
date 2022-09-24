import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { Despacho } from 'src/app/models/despacho';
import { ClienteService } from 'src/app/services/cliente.service';
import { DespachoService } from 'src/app/services/despacho.service';

@Component({
  selector: 'app-cliente-alta',
  templateUrl: './cliente-alta.component.html',
  styleUrls: ['./cliente-alta.component.css']
})
export class ClienteAltaComponent implements OnInit {

  clientes : Cliente;
  despachos : Despacho[];

  private suscripcion = new Subscription();

  @ViewChild('formulario')formulario : NgForm;

  constructor(private clienteServicio : ClienteService,
              private despachoServicio: DespachoService,
              private route: Router) { }

  ngOnInit(): void {
    this.cargarCombo();
  }

  guardar(){
    this.suscripcion.add(
      this.clienteServicio.agregarCliente(this.clientes).subscribe({
        next: ()=>{
          this.route.navigate(['cliente-listado']);
          console.log(this.clientes);
        },
        error: ()=> {
          alert('Error guardando');
        }
      })
    )
  }

  cargarCombo(){
    this.clientes = { tipoDespacho : {} } as Cliente;
    this.suscripcion.add(
      this.despachoServicio.obtenerDespacho().subscribe({
        next: (respuesta: Despacho[]) => {
          this.despachos = respuesta;
        },
        error: () => {
          alert('error al obtener las categorias');
        },
      })
    );
  }

  cancelar(){
    this.route.navigate(['listado']);
  }

}
