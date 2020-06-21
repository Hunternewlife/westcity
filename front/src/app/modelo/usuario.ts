export class Usuario {
  constructor(
    public _id: string,
    public nombre: string,
    public apellido: string,
    public documento: number,
    public contrasena: string,
    public correo: string,
    public tarjeta: number,
    public suscripcion: string,
    public estado: string,
    public imagen: string,
    public rol: string,
  ) {}
}
