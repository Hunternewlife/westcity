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
    console.log('prev lista tiq', this.itemsCarrito)
    this.subject.next([...this.itemsCarrito, producto]);
    console.log('lista tiq',this.itemsCarrito)
  }
  ordenarArreglo(){
    this.itemsCarrito.sort(function (a, b) {
      if (a._id > b._id) {
        return 1;
      }
      if (a._id < b._id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }

  eliminarUnidad(producto: Producto){
    let index =this.itemsCarrito.findIndex(product => product._id === producto._id);
    this.itemsCarrito.splice(index,1);
    this.subject.next(this.itemsCarrito);
  }

  eliminarItem(producto : Producto){
    
    let eliminar = true;   
        let arrayL = 0
        while (this.itemsCarrito.find(product => product._id === producto._id)!=undefined) {
          if(arrayL>= this.itemsCarrito.length){
            //console.log('reset')
            arrayL=0;
          }

          if(this.itemsCarrito[arrayL]._id!=undefined){
            if(this.itemsCarrito[arrayL]._id===producto._id){
              this.itemsCarrito.splice(arrayL, 1);
            }
          }
          

          arrayL++;

        }
      
     

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
