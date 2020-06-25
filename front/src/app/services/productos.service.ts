import { Injectable } from '@angular/core';
// Modelo generico de un producto
import { Producto } from '../modelo/producto';

@Injectable()
export class ProductosService {
  // Datos quemados de productos
  productos: Array<Producto>;

  constructor() {
    this.productos = [
      // De acuerdo con la info del profesor 10 productos
      {
        _id: '1',
        nombre: 'Hamburguesa',
        descripcion: 'Deliciosa hamburguesa de bisonte con salsa BBQ.',
        precio: 10000,
        tipo: 'confiteria',
      },
      {
        _id: '2',
        nombre: 'Carne',
        descripcion:
          'Carne seca. Al mejor estilo de nuestras tierras desérticas.',
        precio: 2500,
        tipo: 'confiteria',
      },
      {
        _id: '3',
        nombre: 'Kolache',
        descripcion: 'Delicioso pan relleno de mermelada.',
        precio: 5000,
        tipo: 'confiteria',
      },
      {
        _id: '4',
        nombre: 'Crispetas Western',
        descripcion:
          'Palomitas picantes como el infierno. Espolvoreadas con jalapeño.',
        precio: 13000,
        tipo: 'confiteria',
      },
      {
        _id: '5',
        nombre: 'Zarzaparrilla',
        descripcion: 'Bebida refrescante. Buena para su piel y sus riñones.',
        precio: 7000,
        tipo: 'confiteria',
      },
      {
        _id: '6',
        nombre: 'Pan de campo',
        descripcion:
          'No se deje engañar. Se trata de una galleta salada. Va muy bien con la Zarzaparrilla.',
        precio: 3000,
        tipo: 'confiteria',
      },
      {
        _id: '7',
        nombre: 'Caja de Fruta deshidratada',
        descripcion: 'Aperitivo que incluye: uvas, ciruelas y arándanos',
        precio: 5000,
        tipo: 'confiteria',
      },
      {
        _id: '8',
        nombre: 'Son of a Stew',
        descripcion: 'Delicioso estofado de ternera (en lata).',
        precio: 12000,
        tipo: 'confiteria',
      },
      {
        _id: '9',
        nombre: 'Sandwich del Oeste',
        descripcion:
          'Sandwich de huevo revuelto o tortilla de huevo con cebolla, jamón y pimiento verde.',
        precio: 6000,
        tipo: 'confiteria',
      },
      {
        _id: '10',
        nombre: 'Vino de Cactus',
        descripcion:
          'Seguro que quieres recordar aquella vez que te perdiste en el desierto.',
        precio: 30000,
        tipo: 'confiteria',
      },
      // De acuerdo con la info del profesor 4 combos
      {
        _id: '11',
        nombre: 'Combo Joaquín Murrieta',
        descripcion: 'Hamburguesa + Zarzaparrilla + Kolache.',
        precio: 20000,
        tipo: 'combo',
      },
      {
        _id: '12',
        nombre: 'Combo John wayne',
        descripcion: 'Crispetas + Pan de Campo + Cecina + Zarzaparrilla.',
        precio: 23000,
        tipo: 'combo',
      },
      {
        _id: '13',
        nombre: 'Combo Jesse James',
        descripcion:
          'Crispetas + Zarzaparrilla(2) + Caja de Fruta + Hamburguesa + Sandwich. Combo para parejas.',
        precio: 45000,
        tipo: 'combo',
      },
      {
        _id: '14',
        nombre: 'Combo Western',
        descripcion: 'Son of a Stew + Zarzaparrilla + Kolache + Caja de Fruta',
        precio: 26000,
        tipo: 'combo',
      },
    ];
  }

  // Retorna todos los productos quemados
  getProductos(): Array<Producto> {
    return this.productos;
  }
}
