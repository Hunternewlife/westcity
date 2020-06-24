export class Pelicula {
  constructor(
    public _id: string,
    public nombre: string,
    public sinopsis: string,
    public anio: number,
    public generos: Array<string>,
    public directores: Array<string>,
    public enlacePelicula: string,
    public estado: string,
    public personajes: Array<string>,
    public rutaPoster: string,
    public rutaTrailer: string,
    public pais: string
  ) {}
}
