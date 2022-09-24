import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despacho } from '../models/despacho';

@Injectable({
  providedIn: 'root'
})
export class DespachoService {

  private URL: string ="https://632b55121090510116d6fac2.mockapi.io/despacho/";

  constructor(private http : HttpClient) { }

  obtenerDespacho(): Observable<Despacho[]> {
    return this.http.get<Despacho[]>(this.URL);
  }
}
