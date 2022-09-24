import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private URL: string = "https://632b55121090510116d6fac2.mockapi.io/cliente/";

  constructor(private http: HttpClient) { }

  obtenerCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.URL);
  }
  agregarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.URL, cliente);
  }
  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(this.URL + id);
  }
  obtenerPorId(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.URL + id);
  }

  modificarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.URL + cliente.id, cliente);
  }
}
