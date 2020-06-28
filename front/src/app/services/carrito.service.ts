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

  eliminarUnidad(producto: Producto){
    let index =this.itemsCarrito.findIndex(product => product._id === producto._id);
    this.itemsCarrito.splice(index,1);
    this.subject.next(this.itemsCarrito);
  }

  eliminarItem(producto : Producto){

    for (let i = this.itemsCarrito.length; i--;) {
      if (this.itemsCarrito[i] === producto) {
          this.itemsCarrito.splice(i, 1);
      }
  }
    
    /* this.itemsCarrito.forEach((itemcarro,index) =>{
        if(itemcarro._id === producto._id){
         // this.itemsCarrito.splice(index,1)
          console.log('pos',index)
        }
    }) */
    console.log(this.itemsCarrito)
    this.subject.next(this.itemsCarrito);

  }

  vaciarCarrito(){
    this.subject.next([]);
  }

  obtenerCarrito(): Observable<Producto[]> {
    return this.subject;
  }

  obtenerTotal(){
    return this.itemsCarrito.reduce((total, producto: Producto) => { return total + producto.precio; }, 0);
  }


}
