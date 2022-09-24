import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-baja',
  templateUrl: './cliente-baja.component.html',
  styleUrls: ['./cliente-baja.component.css']
})
export class ClienteBajaComponent implements OnInit {
  @Input() id: string;
  @Output()onEliminar = new EventEmitter();

  private suscripcion = new Subscription();

  constructor(private clienteServicio : ClienteService) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.suscripcion.add(
      this.clienteServicio.eliminarCliente(this.id).subscribe({
        next: () => {
          this.onEliminar.emit();
        },
        error: () =>{
          alert('No se pudo eliminar');
        }
      })
    )
  }


}
