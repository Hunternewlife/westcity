import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './../modelo/producto';
import { Observable } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class CarritoService {

  private subject: BehaviorSubject<Producto[]> = new BehaviorSubject([]);
  public itemsCarrito: Producto[] = [];

  constructor() { 
    this.subject.subscribe(data => this.itemsCarrito = data);
  }

  agregarCarrito( producto: Producto ){
    this.subject.next([...this.itemsCarrito, producto]);
  }

  vaciarCarrito(){
    this.subject.next(null);
  }

  obtenerCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  obtenerTotal(){
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }


}
