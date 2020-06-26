export class Pelicula {
  constructor(
    public _id: string,
    public nombre: string,
    public sinopsis: string,
    public anio: number,
    public genero: string,
    public director: string,
    public enlacePelicula: string,
    public estado: string,
    public actores: Array<string>,
    public rutaPoster: string
  ) {}
}
